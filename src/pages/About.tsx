import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Agam</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        Perkenalkan, saya Agam Riyandana. Dunia digital selalu menarik bagi saya. Sejak kecil, saya sudah tertarik dengan cara komputer bekerja dan cara perangkat Seluler Bekerja dan bagaimana teknologi dapat mengubah dunia. Kini, saya menyalurkan minat tersebut dengan menjadi [Kreator Digital]. Saya percaya bahwa desain yang baik tidak hanya menarik secara visual, tetapi juga fungsional dan mudah digunakan.
      </p>
    </motion.section>
  );
};
