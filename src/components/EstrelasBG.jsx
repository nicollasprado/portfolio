import { motion } from "framer-motion";
import { Star } from "lucide-react";

function CreateEstrela({ delay }) {
  return (
    <motion.div
        className="w-4 h-4 absolute text-amber-400"
        initial={{ y: Math.random() * (window.innerHeight - 120), opacity: 0}}
        animate={{ x: "97vw", rotateZ: 360, opacity: 100 }}
        transition={{
            duration: Math.random() * 2 + 2,
            ease: "linear",
            repeat: Infinity,
            delay,
        }}
    >
    <Star className="fill-amber-400" />
    </motion.div>
  );
}

function EstrelasBG(){
    return (
        <div>
            {[...Array(30)].map((_, i) => ( 
                <CreateEstrela delay={Math.random() * 5}/>
            ))}
        </div>
    )
}

export default EstrelasBG