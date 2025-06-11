import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Camera } from '@mediapipe/camera_utils';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FaceOverlay = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    // Setup three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(640, 480);
    canvasRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Lighting
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Load 3D model (glasses or necklace)
    const loader = new GLTFLoader();
    loader.load('/model.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(10, 10, 10);
      scene.add(model);
      modelRef.current = model;
    });

    // Setup video and face tracking
    const faceMesh = new FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    const video = videoRef.current;
    const mpCamera = new Camera(video, {
      onFrame: async () => {
        await faceMesh.send({ image: video });
      },
      width: 640,
      height: 480,
    });
    mpCamera.start();

    function onResults(results) {
      if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) return;

      const landmarks = results.multiFaceLandmarks[0];

      // Example: Glasses between eyes (landmark 168 between eyes)
      const leftEye = landmarks[33];
      const rightEye = landmarks[263];
      const mid = {
        x: (leftEye.x + rightEye.x) / 2,
        y: (leftEye.y + rightEye.y) / 2,
        z: (leftEye.z + rightEye.z) / 2,
      };

      if (modelRef.current) {
        modelRef.current.position.set(
          (mid.x - 0.5) * 4, // X offset from center
          -(mid.y - 0.5) * 3, // Y offset from center
          -mid.z * 5 // Z-depth
        );
        modelRef.current.rotation.set(0, 0, 0); // Optional rotation
      }

      renderer.render(scene, camera);
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
      <div ref={canvasRef}></div>
    </div>
  );
};

export default FaceOverlay;
