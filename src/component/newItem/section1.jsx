import { useEffect } from 'react';
import * as THREE from 'three';
import './section1.css';
import { useTranslation } from 'react-i18next';


const Section1 = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
    
        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('space'),
            antialias: true,
        });
    
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 5;
    
        // إنشاء نسيج التدرج
        const createGradientTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 512; // عرض النسيج
            canvas.height = 512; // ارتفاع النسيج
            const ctx = canvas.getContext('2d');
    
            // رسم التدرج اللوني الواضح نحو أسفل اليمين
            const gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
            gradient.addColorStop(0, 'rgb(11, 1, 15)'); // لون فوشي في البداية
            gradient.addColorStop(0.3, 'rgb(50, 3, 53)'); // لون أزرق غامق منتصف المسار
            gradient.addColorStop(0.5, 'rgb(71, 12, 71)'); // لون أزرق غامق منتصف المسار
            gradient.addColorStop(0.9, 'rgb(40, 5, 51)'); // لون أسود في الزاوية السفلى اليمنى
    
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // تحويل Canvas إلى Texture
            const texture = new THREE.CanvasTexture(canvas);
            return texture;
        };
    
        // تعيين النسيج كخلفية
        scene.background = createGradientTexture();
    
        // إعداد النجوم
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: "hsl(300, 36.80%, 85.10%)", size: 5 });
    
        const starVertices = [];
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }
    
        starGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(starVertices, 3)
        );
    
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
    
        function animate() {
            requestAnimationFrame(animate);
            stars.rotation.x += 0.0003;
            stars.rotation.y += 0.0003;
            renderer.render(scene, camera);
        }
    
        animate();
    
        // تحديث إعدادات الكاميرا وواجهة العرض عند تغيير حجم النافذة
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
    
        window.addEventListener('resize', handleResize);
    
        // تنظيف الموارد عند انتهاء استخدام العنصر
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);
    
    
    
    
    // useEffect(() => {
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(
    //         75,
    //         window.innerWidth / window.innerHeight,
    //         0.1,
    //         1000
    //     );

    //     const renderer = new THREE.WebGLRenderer({
    //         canvas: document.getElementById('space'),
    //         antialias: true,
    //     });

    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     camera.position.z = 5;

    //     const starGeometry = new THREE.BufferGeometry();
    //     // const starMaterial = new THREE.PointsMaterial({ color: 0x640D5F, size: 5 });
    //     const starMaterial = new THREE.PointsMaterial({ color: "hsl(300, 36.80%, 85.10%)", size: 5 });

    //     const starVertices = [];

    //     for (let i = 0; i < 5000; i++) {
    //         const x = (Math.random() - 0.5) * 2000;
    //         const y = (Math.random() - 0.5) * 2000;
    //         const z = (Math.random() - 0.5) * 2000;
    //         starVertices.push(x, y, z);
    //     }

    //     starGeometry.setAttribute(
    //         'position',
    //         new THREE.Float32BufferAttribute(starVertices, 3)
    //     );

    //     const stars = new THREE.Points(starGeometry, starMaterial);
    //     scene.add(stars);

    //     function animate() {
    //         requestAnimationFrame(animate);
    //         stars.rotation.x += 0.0003;
    //         stars.rotation.y += 0.0003;
    //         renderer.render(scene, camera);
    //     }
    //     // scene.background = new THREE.Color(0x123); // لون الخلفية الأسود
    //     scene.background = new THREE.Color("hsl(303, 93.10%, 11.40%)"); // لون الخلفية الأسود
    //     animate();

    //     // Handle window resize
    //     const handleResize = () => {
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Clean up on component unmount
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //         renderer.dispose();
    //     };
    // }, []);
    return (
        <>

            <div className="hero-container" >
                <canvas id="space" className='space'></canvas>
                <div className="hero-content-home">
                    <span className="heroSpan">{t('Our Platform Your Success')}</span>
                    <h1>{t('YOU ARE THE TALENT')}</h1>
                    <div className="features">
                        <div className="feature-item">
                            <img
                                src="assets/Images/10.jpg"
                                alt="Profit Split"
                            />
                            <h3>{t('Up to 95%')}</h3>
                            <p>{t('of Profit Split')}</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="assets/Images/13.jpg"
                                alt="Account"
                            />
                            <h3>{t('Up to $300k')}</h3>
                            <p>{t('Trading Accounts')}</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="assets/Images/8.jpg"
                                alt="Add-ons"
                            />
                            <h3>{t('Add-Ons')}</h3>
                            <p>{t('to Enhance Trading')}</p>
                        </div>
                        <div className="feature-item">
                            <img
                                src="assets/Images/7.jpg"
                                alt="Time Limit"
                            />
                            <h3>{t('No time limit')}</h3>
                            <p>{t('in Challenge Phase')}</p>
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="btnBlock">
                                <div className="buttonContainer">
                                    <button className="buttonFree" >{t('Start Challenge')}</button>
                                    <div className="animatedBackground"></div>
                                    <div className="innerBlurEffect"></div>
                                </div>
                        </div>
                        <div className="btnBlock">
                                <div className="buttonContainer buttonContainer2">
                                    <button className="buttonFree">{t('Free Trial')}</button>
                                    <div className="animatedBackground"></div>
                                    <div className="innerBlurEffect innerBlurEffect2"></div>
                                </div>
                        </div>
                    </div>


                

                </div>
            </div>
        </>
    );
}

export default Section1;