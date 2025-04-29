import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../RevealOnScroll';
import { Carousel } from '../Carousel';
import { isLoggedIn } from '../../App';

const carouselItems = [
  { 
    image: 'https://braincity.berlin/fileadmin/user_upload/tuberlin-bibliothek--tu-berlin-dahl-1000.jpg', 
    alt: 'Slide 1',
    title: 'Your Gateway to European Universities',
    description: 'Streamline your university application process with our comprehensive platform. Get expert guidance, track your applications, and increase your chances of admission.'
  },
  { 
    image: 'https://fel.cvut.cz/dokumenty/1167/image-thumb__1167__BoxCtaImage/2022_06_fel_dejvice_kampus_exterier_noc_bezlidi_03.jpg', 
    alt: 'Slide 2',
    title: 'Explore Top Universities',
    description: 'Discover a wide range of programs and institutions across Europe. Find the perfect fit for your academic and career goals.'
  },
  { 
    image: 'https://www.ls.tum.de/fileadmin/w00bww/ls/bilder/research/hef-mit-bruecke-slider.jpg', 
    alt: 'Slide 3',
    title: 'Join a Global Community',
    description: 'Connect with students and alumni from around the world. Build a network that supports your growth and success.'
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 -z-2">
      {/* Carousel Section */}
      <section className="py-20 px-4 z-2">
        <div className="max-w-7xl mx-auto">
          <Carousel items={carouselItems} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50">
                <div className="text-indigo-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Personalized Guidance</h3>
                <p className="text-gray-600">Get tailored advice based on your profile and preferences.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <div className="text-indigo-600 text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Application Tracking</h3>
                <p className="text-gray-600">Monitor all your applications in one place with real-time updates.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <div className="text-indigo-600 text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Support</h3>
                <p className="text-gray-600">Access to experienced advisors and university representatives.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Universities
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['University of Amsterdam', 'Sorbonne University', 'University of Munich', 'University of Copenhagen'].map((university) => (
                <div key={university} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{university}</h3>
                  <p className="text-gray-600 text-sm">Top-ranked institution with diverse programs</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-gray-50">
                <p className="text-gray-600 mb-4">
                  &ldquo;The platform made my application process so much smoother. I got accepted to my dream university in Germany!&rdquo;
                </p>
                <p className="font-semibold text-gray-900">- Maria S., University of Munich</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <p className="text-gray-600 mb-4">
                  &ldquo;The expert guidance helped me choose the right program and prepare a strong application. Highly recommend!&rdquo;
                </p>
                <p className="font-semibold text-gray-900">- Alex K., University of Amsterdam</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center bg-indigo-600 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful applicants who have used our platform to secure their place in top European universities.
              </p>
              <Link 
                to={!isLoggedIn ? "/auth" : "/dashboard"}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                {!isLoggedIn ? "Create Your Account" : "Go to Dashboard"}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      {/* <div className="absolute inset-0 w-full h-full pointer-events-none -z-1">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
      </div> // TODO: Fix decorations  */}
      
    </div>
  );
};
