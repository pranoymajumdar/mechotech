import { motion } from "framer-motion";
import { LucideChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { type CategoryType, ProductCategory } from "@/constants/products";
import { useRouter } from "@tanstack/react-router";
import CategoryCard from "./CategoryCard";

function getRandomImage(): string {
  const imageSources = [
    "https://picsum.photos/200/150?random=1",
    "https://picsum.photos/200/150?random=2",
    "https://picsum.photos/200/150?random=3",
    "https://picsum.photos/200/150?random=4",
    "https://picsum.photos/200/150?random=5",
    "https://picsum.photos/200/150?random=6",
  ];
  return imageSources[Math.floor(Math.random() * imageSources.length)];
}

const categories: CategoryType[] = [
  {
    name: ProductCategory.AutomaticMachine,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, quam?",
    image: getRandomImage(),
  },
  {
    name: ProductCategory.CircularSawMachine,
    description: "Information about circular saw machines.",
    image: getRandomImage(),
  },
  {
    name: ProductCategory.HorizontalBandsawMachine,
    description: "Details on horizontal bandsaw machines.",
    image: getRandomImage(),
  },
  {
    name: ProductCategory.SpareParts,
    description: "Explore our range of spare parts.",
    image: getRandomImage(),
  },
  {
    name: ProductCategory.SpecialPurposeMachine,
    description: "Learn about our special purpose machines.",
    image: getRandomImage(),
  },
  {
    name: ProductCategory.VerticalBandsawMachine,
    description: "Description of vertical bandsaw machines.",
    image: getRandomImage(),
  },
];

export default function OurProducts() {
  const router = useRouter();
  return (
    <section className="relative py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      <div className="container relative px-4 mx-auto">
        {/* Section Header - Updated to match About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Our{" "}
            <span className="text-primary font-normal">Featured Products</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of high-quality bandsaw machines designed for
            precision and reliability
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="group relative px-8 overflow-hidden"
            onClick={() =>
              router.navigate({
                to: "/products",
              })
            }
          >
            <span className="relative z-10">View All Products</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary/10"
            />
            <LucideChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
