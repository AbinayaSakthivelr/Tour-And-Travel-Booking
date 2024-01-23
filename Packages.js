import React from "react";
import PackagesData from "./PackagesData";

function Packages() {
  return (
   
    <div className="trip">
  <h1>Packages</h1>
  <div className="pack">
        <p>Awesome Packages</p>
        </div>
      <div className="tripcard">
        
        <PackagesData
          image="https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0="
          heading="$149.00"
          text=" Indonesia, an archipelago of wonders untold,
          Where vibrant cultures and traditions unfold.
          From Bali's serene beauty to Java's ancient tales,
          A land of diverse landscapes, where adventure prevails."
        />
        <PackagesData
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT43PmdMjV3EViHR8du3MehdSVZZEDHBJ9w&usqp=CAU"
          heading="$139.00"
          text="Thailand, a kingdom of golden allure,
          Where ancient temples and culture endure.
          From bustling Bangkok to serene Thai isles,
          A land of smiles, rich in diverse styles."
        />
        <PackagesData
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5Var-7PFLGalhnixVYTf9TxpGFg7qEDdd2NwT9cwOpi1xnsu2i_7iqnFYDexLHMSR9Q&usqp=CAU"
          heading="$189.00"
          text="Australia, a vast land of diverse terrain,
          Where Outback red meets coastal domain.
          From Sydney's Opera House to the Great Barrier Reef,
          Nature's wonders and cultures, beyond belief."
        />
        <PackagesData
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DZsbMjCufIsE6JiMx2YqHNKOKAL8Whj8aVA29cvcf6Cs10mGdmU7BD38WrY7uuLEWBo&usqp=CAU"
          heading="$199.00"
          text="Goa, India's coastal jewel, pristine and bright,
          Golden beaches kissed by azure light.
          Where Portuguese history meets vibrant bazaars,
          A paradise of sun, sea, and cultural memoirs."
        />
        <PackagesData
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6X6cO4o73C6YRXNlCSRm21tgN85bTuFJ3cshO6_V46VfR6tzCmB6-m1UzY41Rbi7CP0&usqp=CAU"
          heading="$179.00 "
          text="Himachal Pradesh, nestled in the Himalayas tall,
          Snow-capped peaks and valleys, a scenic sprawl.
          From Shimla's colonial grace to Manali's serene delight,
          A land of breathtaking beauty, a traveler's pure delight."
        />
        
      </div>
    </div>
    
  );
}

export default Packages;
