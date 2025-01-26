import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit as Circuit, Cpu, Brain, Notebook as Robot, Rocket, Code, Database, Cloud, Wifi, Smartphone, Laptop, Monitor, Calendar, MapPin, Clock, ScrollText } from 'lucide-react';

function AnimatedLogo() {
  const pathLength = useMotionValue(0);
  const springConfig = { damping: 12, stiffness: 100 };
  const spring = useSpring(pathLength, springConfig);

  useEffect(() => {
    pathLength.set(1);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-2"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: 360,
          filter: [
            'drop-shadow(0 0 10px #06b6d4)',
            'drop-shadow(0 0 20px #06b6d4)',
            'drop-shadow(0 0 10px #06b6d4)'
          ]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-8 h-8"
      >
        <Circuit className="text-cyan-500 absolute top-0 left-0" size={32} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          textShadow: [
            '0 0 10px #06b6d4',
            '0 0 20px #06b6d4',
            '0 0 30px #06b6d4',
            '0 0 20px #06b6d4',
            '0 0 10px #06b6d4'
          ]
        }}
        transition={{
          duration: 0.5,
          textShadow: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="text-2xl font-bold text-cyan-500"
      >
        TechFest 2025
      </motion.h1>
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <AnimatedLogo />
        <div className="flex gap-8">
          {['Home', 'Events', 'About'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: '#06b6d4' }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-cyan-500 transition-colors relative group"
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      id="home"
      className="h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        style={{
          y,
          opacity,
          scale,
          x: mousePosition.x,
          rotateX: mousePosition.y,
          rotateY: -mousePosition.x,
        }}
        className="text-center z-10 perspective-1000"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold text-white mb-4"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            TANT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block text-cyan-500"
          >
            RAZ
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block ml-4"
          >
          2025
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <motion.p
            className="text-xl text-cyan-400 mb-8"
            animate={{
              textShadow: [
                "0 0 8px rgb(6 182 212 / 0.5)",
                "0 0 16px rgb(6 182 212 / 0.5)",
                "0 0 8px rgb(6 182 212 / 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Innovate • Create • Transform
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#events"
              className="bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Events</span>
              <motion.div
                className="absolute inset-0 bg-cyan-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function EventDetails({ event, onClose }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-cyan-500/20 p-3 rounded-full"
            >
              <event.icon className="text-cyan-500" size={24} />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">{event.title}</h2>
          </div>

          <div className="grid gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <Calendar className="text-cyan-500" size={20} />
              <span>{event.date}</span> {/* Dynamic date */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <Clock className="text-cyan-500" size={20} />
              <span>{event.timings}</span> {/* Dynamic timings */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <MapPin className="text-cyan-500" size={20} />
              <span>{event.venue}</span> {/* Dynamic venue */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <ScrollText className="text-cyan-500" size={20} />
              Rules & Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </motion.div>

          <motion.a
            href={event.formLink} // Dynamic register link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full bg-cyan-500 text-black text-center py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Register Now</span>
            <motion.div
              className="absolute inset-0 bg-cyan-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function EventCard({ event, index, onEventClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => onEventClick(event)}
      className="bg-gray-900 rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="h-48 overflow-hidden relative">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {event.title}
          </motion.h3>
          <motion.p
            className="text-gray-300 text-sm"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {event.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = [
    {
      title: "Hackathon",
      icon: Code,
      description: "24-hour coding challenge to solve real-world problems",
      image: "https://github.com/varada-sandeep/Tantraz2025/blob/main/quickfingers.png?raw=true",
      formLink: "https://forms.gle/HSnek7ht2tt4vWmW6",
      date: "March 15, 2024", // Custom date
      timings: "10:00 AM - 6:00 PM", // Custom timings
      venue: "Auditorium, Engineering Block", // Custom venue
      rules: [
        "Teams must consist of 2-4 members",
        "All team members must be currently enrolled students",
        "Prior registration is mandatory",
        "Participants must bring their own laptops",
        "Internet access will be provided"
      ]
    },
    {
      title: "Robotics Workshop",
      icon: Robot,
      description: "Build and program your own robot",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1740",
      formLink: "#",
      rules: [
        "Participants must bring their own tools",
        "No prior experience required",
        "Teams of 2-3 members",
        "All materials will be provided",
        "Workshop duration: 4 hours"
      ]
    },
    {
      title: "AI Summit",
      icon: Brain,
      description: "Explore the latest in artificial intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932",
      formLink: "#"
    },
    {
      title: "Cyber Security",
      icon: Wifi,
      description: "Learn about ethical hacking and security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      description: "Master cloud technologies and deployment",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "IoT Workshop",
      icon: Cpu,
      description: "Create connected devices and smart solutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "App Development",
      icon: Smartphone,
      description: "Build mobile applications from scratch",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "Game Development",
      icon: Laptop,
      description: "Create your own video game",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "Data Science",
      icon: Database,
      description: "Analyze and visualize complex datasets",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "Space Tech",
      icon: Rocket,
      description: "Explore space technology and astronomy",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "Circuit Design",
      icon: Circuit,
      description: "Design and build electronic circuits",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1740",
      formLink: "#"
    },
    {
      title: "AR/VR Demo",
      icon: Monitor,
      description: "Experience augmented and virtual reality",
      image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?q=80&w=1740",
      formLink: "#"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              index={index}
              onEventClick={setSelectedEvent}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <EventDetails
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "linear-gradient(45deg, #06b6d4 0%, #3b82f6 100%)",
                "linear-gradient(45deg, #3b82f6 0%, #06b6d4 100%)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="relative z-10">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-8"
            >
              About TechFest
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <p className="text-gray-300 leading-relaxed mb-6">
                  TechFest is our college's premier technology festival, bringing together the brightest minds and latest innovations. Our mission is to inspire, educate, and showcase the future of technology.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Join us for an unforgettable experience of workshops, competitions, and demonstrations that will push the boundaries of what's possible in technology.
                </p>
              </motion.div>
              <div className="space-y-4">
                {[
                  { icon: Rocket, title: "Innovation Hub", desc: "Showcase your groundbreaking ideas" },
                  { icon: Brain, title: "Learning Experience", desc: "Learn from industry experts" },
                  { icon: Circuit, title: "Hands-on Workshops", desc: "Get practical experience" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-cyan-500/20 p-3 rounded-full"
                    >
                      <item.icon className="text-cyan-500" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Events />
      <About />
    </div>
  );
}

export default App;