"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var GLTFLoader_js_1 = require("three/examples/jsm/loaders/GLTFLoader.js");
var scene = new three_1.Scene(); //1. 장면만들고
scene.add(); //여기에 그림을 그릴 수 있음.
var renderer = new three_1.WebGLRenderer({
    antialias: true,
});
renderer.outputEncoding = three_1.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
var camera = new three_1.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000); //PerspectiveCamera (원근법 O), OrthographicCamer (원근법 X)
camera.position.set(0, 0, 150);
//const controls = new THREE.OrbitControls(camera);
// controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
// controls.zoomSpeed = 1.2;    // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
scene.background = new three_1.Color("white");
var light = new three_1.DirectionalLight(0xffffff, 10); //조명
scene.add(light);
var loader = new GLTFLoader_js_1.GLTFLoader(); //gltf 파일은 GLTFLoader 로 가져와야됨
loader.load("/resources/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    function animate() {
        requestAnimationFrame(animate); //1초에 60번 실행됨.
        //회전
        gltf.scene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}); //로그 할떄 시간이 좀 걸림 콜백 필요 , parametr 에 들어가 있음.
