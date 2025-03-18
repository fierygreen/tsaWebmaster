import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const menuRef = React.useRef();
    
    useEffect(() => {
        // GSAP animations for the header text
        gsap.fromTo(
            "header h1",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        // GSAP animations for menu section items (images, titles, descriptions)
        const menuItems = gsap.utils.toArray(menuRef.current.children);

        menuItems.forEach((menuItem, index) => {
            if (menuItem.tagName === 'H1') return;

            gsap.fromTo(
                menuItem,
                {
                opacity: 0,
                y: 50,
                },
                {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: menuItem,
                    start: "top 90%", // Trigger when top of item is 90% from the viewport
                    end: "top 50%",   // End animation when it reaches 50% from the viewport
                    scrub: true,
                    stagger: 0.4, // Stagger animation for each item
                    markers: false, // Optional: Shows the start/end markers for debugging
                },
                }
            );
        });

        // GSAP animation for the other sections (locations, gallery, contact, etc.)
        gsap.fromTo(
            "section",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.4, delay: 0.4, duration: 2, ease: "power2.out" }
        );

        gsap.fromTo(
            "nav ul li a", 
            { opacity: 0, y: -20 }, // Starting state (hidden and slightly above)
            { opacity: 1, y: 0, stagger: 0.2, duration: 1 } // End state (visible and in place)
          );
        
    }, []);

    return (
        <div>
            <a href="#home">
                <img id="logo" src="/public/images/leaf.svg" alt="Leaf Logo" />
            </a>
            <header>
                <h1>Freshly Made</h1>
                <nav>
                    <button id="menu-toggle">&#9776;</button>
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu-section">Menu</a></li>
                        <li><a href="#locations">Locations</a></li>
                        <li><a href="#mission">Mission</a></li>
                        <li><a href="#qa-section">FAQs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="home" className="text-black py-24">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-4 leading-tight">Welcome to Freshly Made</h1>
                    <p className="text-xl mb-6">Delicious, fresh, and healthy meals made with love.</p>
                    <p className="text-lg mb-4">
                        We are a fast-casual chain of restaurants located in the heart of Utah, specialising in
                        making fresh and healthy meals for our customers. Our menu features a variety of options
                        including wraps, salads, burgers, and more, all made with locally-sourced ingredients.
                        </p>
                    <p className="text-lg mb-8">At Freshly Made, we believe in quality ingredients and sustainable practices, serving you the best flavors in town. You can trust us, to give you a great dining experience.</p>
                    <a
                        href="#menu"
                        className="inline-block text-black px-6 py-3 bg-white border-2 border-black rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all mt-16"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            window.scrollTo({
                            top: document.getElementById('menu').offsetTop + 600, // Adjust the offset for scroll position
                            behavior: 'smooth', // Smooth scrolling effect
                            });
                        }}
                    >
                        Explore Our Menu
                    </a>

                </div>
            </section>


            <section id="menu-section" ref={menuRef}>
                <h1 className>Our Menu</h1>
                <div className="menu-item">
                    <div className="menu-item-details">
                        <img src="/public/images/wrap.jpg" alt="Grilled Veggie Wrap" />
                        <div className="menu-text">
                            <h3>Grilled Veggie Wrap</h3>
                            <p>A delicious wrap filled with grilled vegetables, hummus, and fresh greens. A healthy and satisfying option for everyone.</p>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-details">
                        <img src="/public/images/quinoa.jpg" alt="Quinoa Salad" />
                        <div className="menu-text">
                            <h3>Quinoa Salad</h3>
                            <p>Quinoa mixed with fresh veggies and a light vinaigrette, packed with protein and perfect for a light lunch or dinner.</p>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-details">
                        <img src="/public/images/burger.jpg" alt="Vegan Burger" />
                        <div className="menu-text">
                            <h3>Vegan Burger</h3>
                            <p>Our plant-based burger is made with a juicy veggie patty, fresh lettuce, tomato, and a creamy vegan mayo sauce.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="locations" className="bg-green-50 py-12">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-semibold text-green-700 mb-4">Our Locations</h2>
                    <p className="text-lg text-gray-600 mb-8">Find us in multiple locations across the city!</p>
                    
                    <div className="flex justify-center gap-12">
                        <div className="location-card bg-white shadow-lg rounded-lg p-6 w-72 text-center">
                            <h3 className="text-xl font-semibold text-green-700">Downtown - Provo</h3>
                            <p className="text-gray-500">Main Street, Provo</p>
                            <p className="text-gray-600 mt-2">Enjoy delicious meals in the heart of downtown, with a cozy ambiance and amazing city views.</p>
                        </div>

                        <div className="location-card bg-white shadow-lg rounded-lg p-6 w-72 text-center">
                            <h3 className="text-xl font-semibold text-green-700">Uptown - Salt Lake City</h3>
                            <p className="text-gray-500">Main Street, Salt Lake City</p>
                            <p className="text-gray-600 mt-2">Our Salt Lake City location offers a modern atmosphere with easy access and great food!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mission">
                <h2>Our Mission</h2>
                <div className="mission-text">
                    <p>
                    At Freshly Made, our mission is to provide our customers with wholesome, fresh, and locally-sourced meals. We believe in the power of nourishing food that not only supports a healthy lifestyle but also fosters a deeper connection with the community. Through innovative recipes and sustainable practices, we aim to make every meal a step toward a healthier, more sustainable future.<br /> <br /> - Ericcson Ansah-Antwi, CEO
                    </p>
                </div>
            </section>

            <section id="qa-section" className="bg-gray-50 py-12">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h1 className="text-xl font-semibold mb-4">FAQs</h1>
                    <h4 className="text-lg text-gray-600 mb-8">Have questions? We've got answers! Explore our Q&A below.</h4>


                    <div className="flex justify-center gap-12">
                        <div className="qa-card bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:transform hover:scale-105 transition-all ease-in-out duration-300">
                            <h3 className="text-xl font-semibold text-green-700">How do I place an order?</h3>
                            <p className="text-gray-500">You can place an order online through our website, or visit us at any of our locations to enjoy a meal in-house.</p>
                        </div>

                        <div className="qa-card bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:transform hover:scale-105 transition-all ease-in-out duration-300">
                            <h3 className="text-xl font-semibold text-green-700">Do you offer vegan options?</h3>
                            <p className="text-gray-500">Yes, we offer a variety of vegan dishes, such as our Vegan Burger and Grilled Veggie Wrap.</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-12 mt-8">
                        <div className="qa-card bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:transform hover:scale-105 transition-all ease-in-out duration-300">
                            <h3 className="text-xl font-semibold text-green-700">Where are you located?</h3>
                            <p className="text-gray-500">Check out our Locations page for all of our restaurant locations.</p>
                        </div>

                        <div className="qa-card bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:transform hover:scale-105 transition-all ease-in-out duration-300">
                            <h3 className="text-xl font-semibold text-green-700">What are your hours?</h3>
                            <p className="text-gray-500">We are open daily from 10 AM to 9 PM. Feel free to visit us during these hours!</p>
                        </div>

                        <div className="qa-card bg-white shadow-lg rounded-lg p-6 w-72 text-center hover:transform hover:scale-105 transition-all ease-in-out duration-300">
                            <h3 className="text-xl font-semibold text-green-700">Do you cater events?</h3>
                            <p className="text-gray-500">Yes, we offer catering services for events. Please contact us for more information.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section id="contact">
                <h2>Contact Us</h2>
                <p>Email: info@freshlymade.com <br />Phone: +1 (385) 482-4826</p>
                <p>Monday-Friday: 10:00 - 9:00 <br /> Saturday & Sunday: 10:00 - 3:00 </p>
                <h1 id="bottomLogo">Freshly Made</h1>
            </section>

            <footer>
                <p>© 2025 Freshly Made Restaurant</p>
            </footer>
        </div>
    );
};

export default App;
