const HeroSection = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1>Good Morning Everyone, How Are You ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Veritatis eligendi deserunt, fugit, quibusdam illum 
             adipisci dolorum aut exercitationem rerum neque quasi 
             tempora nesciunt ea. Natus animi dignissimos provident eveniet harum.</p>

             <div className="hero-btn">
                <button>Shop Now</button>
                <button className="second-btn">Category</button>
             </div>
             <div className="shopping">
             <p>Also Available On</p>
             <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon logo" />
                <img src="/images/flipkart.png" alt="flipkart logo" />
             </div>
             </div>
        </div>
        <div className="hero-img">
        <img src="/images/shoes.png" alt="shoes logo" />
        </div>
    </main>
}

export default HeroSection