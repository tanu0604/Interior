import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import livingRoom from "../../assets/library/livingroom/1.jpg";
import bedroom from "../../assets/library/bedroom/1.jpg";
import kitchen from "../../assets/library/kitchen/1.jpg";
import dining from "../../assets/library/dining/1.jpg";
import office from "../../assets/library/office/1.jpg";
import bathroom from "../../assets/library/bathroom/1.jpg";
import furniture from "../../assets/library/furniture/1.jpg";
import { useNavigate } from "react-router-dom";

export const categories = [
  {
    id: 1,
    title: "Living Room Designs",
    tags: ["Modern", "Minimalist", "Traditional", "Boho"],
    images: [
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
      livingRoom,
    ], // Updated to array of images
  },
  {
    id: 2,
    title: "Bedroom Interiors",
    tags: ["Cozy setups", "Luxury bedrooms", "Kids' rooms"],
    images: [bedroom, bedroom, bedroom, bedroom, bedroom, bedroom, bedroom], // Updated to array of images
  },
  {
    id: 3,
    title: "Kitchen Spaces",
    tags: ["Modular kitchens", "Open kitchen concepts"],
    images: [kitchen, kitchen, kitchen, kitchen, kitchen], // Updated to array of images
  },
  {
    id: 4,
    title: "Dining Spaces",
    tags: ["Modular kitchens", "Open kitchen concepts"],
    images: [dining, dining, dining, dining, dining], // Updated to array of images
  },
  {
    id: 5,
    title: "Office Interiors",
    tags: ["Work-from-home setups", "Corporate office designs"],
    images: [office, office, office, office], // Updated to array of images
  },
  {
    id: 6,
    title: "Bathroom & Spa Interiors",
    tags: ["Luxury baths", "Wellness spaces"],
    images: [bathroom, bathroom, bathroom, bathroom, bathroom], // Updated to array of images
  },
  {
    id: 7,
    title: "Custom Furniture & Decor",
    tags: ["Unique furniture pieces", "Handmade designs"],
    images: [furniture, furniture, furniture, furniture], // Updated to array of images
  },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);
  const navigate = useNavigate();

  const [visibleImages, setVisibleImages] = useState(3); // Initially show 3 images per category

  // Update to handle category navigation
  const handleOnClick = (categoryId) => {
    navigate(`/gallery/${categoryId}`); // Navigate to specific category page
  };

  // Handle "See More" button click for more images
  const handleSeeMore = (categoryId) => {
    setVisibleImages((prev) => prev + 3); // Add 3 more images
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -300 * categories.length],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    }
  }, [controls, isInView, categories.length]);

  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[600px] overflow-hidden p-20"
      id="interior-library"
    >
      <div className="container mx-auto px-4 mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-gray-900 text-center font-serif mb-10"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto"
        >
          Explore a variety of interior designs categorized for easy browsing.
          Click "See More" to view related images.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden py-8">
        <motion.div
          animate={controls}
          className="flex gap-6 w-fit"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: [0, -300 * categories.length],
              transition: { duration: 20, ease: "linear", repeat: Infinity },
            })
          }
        >
          {categories.map((category, index) => (
            <motion.div
              key={`${category.id}-${index}`}
              className="relative group w-[300px] flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={category.images[0]} // Display only the first image initially
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 translate-y-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleOnClick(category.id)} // Pass the category's id here
                    className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                  >
                    See More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* "See More" Button Logic */}
      {categories.map((category) => (
        <div key={category.id} className="mt-6">
          <button
            onClick={() => handleSeeMore(category.id)}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            See More
          </button>
        </div>
      ))}
    </section>
  );
}
