import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Import your CSS file

function Destination() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleHover = () => {
    setFlipped(true);
  };

  const handleHoverOut = () => {
    setFlipped(false);
  };

  return (
    <div>
            <style>
        {`
          .card {
            width: 500px;
            height: 500px;
            border: 3px solid black;
            position: relative;
            z-index: 1;
          }

          .card-back {
            transform: rotateY(180deg);
            z-index: 2;
          }

          .card-front {
            z-index: 3;
          }

          .card-inner {
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .card:hover .card-inner {
            transform: rotateY(180deg);
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 100px;
            margin-left: 150px;
          }

          .text {
            font-size: 15px;
            font-weight: bold;
            text-align: justify;
          }

          .title1 {
            font-size: 20px;
            font-weight: bold;
          }

          .card-back,
          .card-front {
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
          }

          .card-front img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin-bottom: 100px;
          }
          .destination h1{
            font-size: 50px;
            color:#35cd0b;
          font-weight: bold;
          text-align: center;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          margin-top: 70px;
        
          }
          
        `}
        
      </style>
      <div className="destination">
        <h1>Popular Destinations</h1>
      <div className="card-container">
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">Paris</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">

    </Card.Title>
    <Card.Text className="text">
    Paris, the City of Light, captivates with the Eiffel Tower's grandeur, Louvre's artistry, and the romantic allure of Montmartre's cobbled streets, offering a timeless blend of history, culture, and romance along the Seine.      

    </Card.Text>
    <Link to="/paris">
    <Button variant="primary">Explore Now</Button>
    </Link>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      {/* Replicate the above structure five more times */}
      {/* ... */}
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1059499522/photo/tokyo-cityscape-where-night-view-and-river-can-be-seen.jpg?s=612x612&w=0&k=20&c=DgZNuUub13E_5oH_KxP1Wn5RAKnWQMTOvBsB1gWU1Jo="
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <Card className="text-center">
  <Card.Header className="title1">Tokyo</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
    
    </Card.Title>
    <Card.Text className="text">
    Tokyo, a vibrant metropolis, dazzles with futuristic skyscrapers and the bustling Shibuya Crossing, blending traditional culture with cutting-edge technology, creating an exhilarating urban tapestry that never sleeps.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '160px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>

      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1591825495543-981fa4410313?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldyUyMHlvcmslMjBjaXR5fGVufDB8fDB8fHww"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">New York</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
      
    </Card.Title>
    <Card.Text className="text">
      New York City, the concrete jungle where dreams are made, dazzles with its towering skyscrapers, world-class entertainment, and melting pot of cultures, epitomizing the pulse of urban life.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>

          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyV6EQcvLK_KNQH4hwts0FlBBejVBQwUQ2g&usqp=CAU"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">London</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
     
    </Card.Title>
    <Card.Text className="text">
      'Discover historic landmark  and relish classic fish and chips. London, a city steeped in history, offers a blend of iconic landmarks, cultural diversity, and a thriving arts scene, captivating visitors with its timeless charm.'
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6GHOAIkFex3UyFcEwz3--IA3-7pL9FhyPA&usqp=CAU"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">Australia</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
      
    </Card.Title>
    <Card.Text className="text">
      'Australia is a land of contrasts, with its iconic landmarks like the Sydney Opera House and Uluru, surrounded by breathtaking natural beauty—from the azure waters of the Great Barrier Reef to the vast expanse of the Outback.'
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpx081nFkHMmoaCfAbRvUhuVqMTAH9r85IPQ&usqp=CAU"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">Rome</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
     
    </Card.Title>
    <Card.Text className="text">
      'Wander through ancient ruins, toss a coin in the Trevi Fountain, and savor authentic gelato. Rome, the Eternal City, entices visitors with its ancient ruins, captivating art, and delectable cuisine, showcasing a blend of history and modernity.'
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1482424985/photo/forest-fire-at-night-wildfire-burning-forest-trees-in-the-mountain-wildfires-caused-by-humans.jpg?s=612x612&w=0&k=20&c=Zj9UZRLNRPENmo2MOJXGehFHKMhhZ4gzXUylaElGnb4="
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
          <Card className="text-center">
  <Card.Header className="title1">Greece</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
      
    </Card.Title>
    <Card.Text className="text">
      'Greece, a tapestry of ancient history and idyllic islands, captivates with its legendary ruins and stunning coastal beauty. Its heritage and allure beckon travelers to explore a land steeped in mythology and Mediterranean allure.'
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '100px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNvrSyJfAfkkv5t5H6Cbcv6ZjjdfJtMapjw&usqp=CAU"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <Card className="text-center">
  <Card.Header className="title1">USA</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
      
    </Card.Title>
    <Card.Text className="text">
      'The United States offers an eclectic mix of vibrant cities, from the iconic New York City to the laid-back charm of San Francisco, complemented by diverse natural wonders, including the Grand Canyon and Yellowstone National Park. '
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '80px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      <div className={`card ${flipped ? 'flipped' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} onClick={handleFlip}>
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgAkLOWex-04pcCkAmEDJHf3QE5Znt9Sv1A&usqp=CAU"
                alt="Image"
              />
            </Card>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <Card className="text-center">
  <Card.Header className="title1">Jordan</Card.Header>
  <Card.Body>
    <Card.Title className="text-sm">
    
    </Card.Title>
    <Card.Text className="text">
    'Jordan, a land of ancient wonders, boasts Petra's mesmerizing rose-red cliffs and the therapeutic buoyancy of the Dead Sea, offering a harmonious blend of history and natural marvels.'
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted text-sm" style={{ height: '160px' }}>2 days ago</Card.Footer>

</Card>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Destination;