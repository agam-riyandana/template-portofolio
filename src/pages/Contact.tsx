import { motion } from 'framer-motion';
import {
  IconBrandCampaignmonitor,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'admin@agamriyandana.my.id',
      link: 'mailto:admin@agamriyandana.my.id',
    },
    {
      id: 2,
      name: 'Instagram',
      image: <IconBrandInstagram style={iconStyles} />,
      description: 'agam_riyandana1',
      link: 'https://www.instagram.com/agam_riyandana1',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'agam-riyandana',
      link: 'https://www.linkedin.com/in/agam-riyandana',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
