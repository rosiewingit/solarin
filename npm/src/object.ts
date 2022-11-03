import {
  DirectionalLight,
  Color,
  PerspectiveCamera,
  sRGBEncoding,
  WebGLRenderer,
  Scene,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new Scene(); //1. 장면만들고
scene.add(); //여기에 그림을 그릴 수 있음.

const renderer = new WebGLRenderer({
  antialias: true,
});

renderer.outputEncoding = sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

let camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  10000
); //PerspectiveCamera (원근법 O), OrthographicCamer (원근법 X)
camera.position.set(0, 0, 150);
//const controls = new THREE.OrbitControls(camera);

// controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
// controls.zoomSpeed = 1.2;    // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.

scene.background = new Color("white");
let light = new DirectionalLight(0xffffff, 10); //조명
scene.add(light);

let loader = new GLTFLoader(); //gltf 파일은 GLTFLoader 로 가져와야됨

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
