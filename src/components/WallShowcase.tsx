import './WallShowcase.css';

export function WallShowcase() {
  return (
    <section className="wall-showcase">
      <div className="showcase-container">
        <div className="showcase-card">
          <div className="card-inner">
            <div className="photos-and-phone">
              <div className="side-photos left-photos">
                <div className="photo-container photo-1-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80" 
                    alt="Friends laughing" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">This was sure a fun night!</p>
                </div>
                <div className="photo-container photo-2-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=300&q=80" 
                    alt="Funny moment" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">This remind me of you</p>
                </div>
                <div className="photo-container photo-3-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" 
                    alt="Candid laugh" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">Literal core memory</p>
                </div>
              </div>
              
              <div className="phone-wrapper">
                <img src="/IphoneScreenShot.png" alt="My Wall screen" className="phone-screenshot" />
              </div>
              
              <div className="side-photos right-photos">
                <div className="photo-container photo-4-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" 
                    alt="Group selfie" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">Classic us</p>
                </div>
                <div className="photo-container photo-5-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=300&q=80" 
                    alt="Best friends" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">Best weekend ever</p>
                </div>
                <div className="photo-container photo-6-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=300&q=80" 
                    alt="Funny faces" 
                    className="side-photo" 
                  />
                  <p className="photo-caption">Why are we like this?</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-text">
            <h2 className="card-title">Your Wall</h2>
            <p className="card-description">
              A living board of the moments people pin when you cross their
              mind — the memes, photos, quotes, and memories that feel like you.
            </p>
            <p className="card-description-accent">
              Not a feed. Not a performance. Just your people.
            </p>
            <ul className="card-micro-bullets">
              <li>Pins can be photos, videos, quotes, and memes</li>
              <li>Choose who can pin (close friends only)</li>
              <li>Review-first mode if you want extra control</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
