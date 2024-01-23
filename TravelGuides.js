import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TravelGuide = () => {
  const cardsData = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuFpsNyQxnIS5BuOrfDJUsAUzTheqBfWfDA&usqp=CAU',
      name: 'Jane Smith',
      designation: 'Tour Guide',
      description: 'Experienced guide providing unique travel experiences.',
      email: 'janesmith@example.com',
      phone: '+1234567890',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHcRrJw_usOORGFjpn5YXjy7S36jWL4hfQw&usqp=CAU',
      name: 'John Doe',
      designation: 'Adventure Specialist',
      description: 'Passionate about off-the-beaten-path adventures.',
      email: 'johndoe@example.com',
      phone: '+1987654321',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY42ZYsUZ177e4yQaUDj3aObJh-YI97htiTw&usqp=CAU',
      name: 'Emma Brown',
      designation: 'Cultural Expert',
      description: 'Expert in cultural heritage and local traditions.',
      email: 'emmabrown@example.com',
      phone: '+1555098765',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&usqp=CAU',
      name: 'Alex Johnson',
      designation: 'Wildlife Explorer',
      description: 'Passionate about wildlife conservation and safaris.',
      email: 'alexjohnson@example.com',
      phone: '+1666777888',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHQKENF_d17_oha73RHzDoJN0vZUhbQ_HjQ&usqp=CAU',
      name: 'Michael Davis',
      designation: 'Historical Guide',
      description: 'Specializes in historical sites and ancient civilizations.',
      email: 'michaeldavis@example.com',
      phone: '+1444555666',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaXTFmlGCw3R4REI_V0WHxcSkMHwpTJVHNQ&usqp=CAU',
      name: 'Sophia Clark',
      designation: 'Mountain Trekker',
      description: 'Loves exploring mountains and trekking trails.',
      email: 'sophiaclark@example.com',
      phone: '+1777888999',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw673qd098zkQY07i5-AgGpsibmd_7XvMxA&usqp=CAU',
      name: 'William Turner',
      designation: 'Beach Connoisseur',
      description: 'Specializes in beach destinations and seaside getaways.',
      email: 'williamturner@example.com',
      phone: '+1222333444',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3fw-6itilhqMfWao69syYXFzH6FKUX_KLQ&usqp=CAU',
      name: 'Olivia White',
      designation: 'Food and Wine Guru',
      description: 'Expert in culinary tours and wine tasting experiences.',
      email: 'oliviawhite@example.com',
      phone: '+1999888777',
    },
    // Add other card data entries as needed
  ];

  const openApp = (app) => {
    if (app === 'facebook') {
      window.open('https://www.facebook.com/', '_blank');
    } else if (app === 'twitter') {
      window.open('https://twitter.com/', '_blank');
    } else if (app === 'instagram') {
      window.open('https://www.instagram.com/', '_blank');
    }
  };

  const openContact = (contactType, value) => {
    if (contactType === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (contactType === 'phone') {
      window.location.href = `tel:${value}`;
    }
  };

  return (
    <div>
      <style>
        {`
          .cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .cards {
            border: 1px solid #0e0d0d;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px;
            width: 350px;
            transition: transform 0.3s ease-in-out;
            position: relative;
          }

          .cards:hover {
            transform: translateY(-5px);
          }

          .card-images {
            width: 100%;
            height: 280px;
            object-fit: cover;
          }

          .card-contents {
            padding: 15px;
          }

          .name {
            font-size: 28px;
            font-weight: bold;
            color: rgb(12, 14, 11);
            margin-top: 200px;
          }

          .card-designation {
            font-size: 16px;
            color: #777;
            margin-bottom: 8px;
          }

          .card-descriptions {
            font-size: 16px;
            color: #555;
            margin-bottom: 15px;
          }

          .card-contact {
            display: flex;
            flex-direction: column;
          }

          .contact-info {
            font-size: 14px;
            color: #333;
            cursor: pointer;
            margin-bottom: 5px;
          }

          .contact-info:hover {
            color: #007bff;
          }

          .icon {
            font-size: 29px;
            margin: 0 2px;
            cursor: pointer;
            color: #010201;
            margin-top: 30px;
            margin-left: 12px;
            margin-right: 12px;
          }

          .icon:hover {
            color: #007bff;
          }

          .card-icons {
            position: absolute;
            top: 220px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
          }
        `}
      </style>

      <h1 style={{ textAlign: 'center', color: 'LimeGreen' }}>Travel Guides</h1>
      <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'Black', textAlign: 'center' }}>Meet Our Guides</h2>

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="cards" key={index}>
            <div className="card-overlay">
              <img src={card.imageUrl} alt={card.name} className="card-images" />
              <div className="card-icons">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icon"
                  onClick={() => openApp('facebook')}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="icon"
                  onClick={() => openApp('twitter')}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon"
                  onClick={() => openApp('instagram')}
                />
              </div>
            </div>

            <div className="card-contents">
              <h3 className="name">{card.name}</h3>
              <p className="card-designation">{card.designation}</p>
              <p className="card-descriptions">{card.description}</p>
              <div className="card-contact">
                <p className="contact-info" onClick={() => openContact('email', card.email)}>
                  Email: {card.email}
                </p>
                <p className="contact-info" onClick={() => openContact('phone', card.phone)}>
                  Phone: {card.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuide;
