import './App.css';
import Nav from './Nav';
import Header from './Header';
import Card from './Card';

function App() {
  const services = [
    {
      title: "Flutter Mobile App Dev for beginners ZERO TO HERO",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning,  3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://pilot.letsupgrade.in/uploads/fghjk_2_7c02de6436.png",
    },
    {
      title: "Bootstrap ZERO TO HERO",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning, 3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://content-strapi-lms.s3.ap-south-1.amazonaws.com/images/origin/boot_52f9b561cc.png",
    },
    {
      title: "Machine Learning for Beginners",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning, 3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://pilot.letsupgrade.in/uploads/fghjk_2_1_0bf1912a3b.png",
    },
    {
      title: "React JS ZERO TO HERO",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning, 3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://content-strapi-lms.s3.ap-south-1.amazonaws.com/images/origin/Copy_of_LMS_BANNER_1_61698640ea.png",
    },
    {
      title: "Devops for Beginners",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning, 3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://pilot.letsupgrade.in/uploads/lolo_20de05af3a.png",
    },
    {
      title: "Web Scraping in Python ZERO TO HERO",
      subtitle: "LetsUpgrade",
      desc: "🧠 15+ Hours Programme, 👨‍🏫Project Based Learning, 3 Assignments and 2 Certificates Based on the capabilities",
      image: "https://content-strapi-lms.s3.ap-south-1.amazonaws.com/images/origin/fghjk_4_23366487e8.png",
    },
  ];

  return (
    <div className="App">
      <h1>Programs :</h1>
      <br />
      <br />
      <div className="container">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            desc={service.desc}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
