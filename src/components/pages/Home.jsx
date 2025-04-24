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
    image: 'https://via.placeholder.com/1200x400?text=Slide+2', 
    alt: 'Slide 2',
    title: 'Explore Top Universities',
    description: 'Discover a wide range of programs and institutions across Europe. Find the perfect fit for your academic and career goals.'
  },
  { 
    image: 'https://via.placeholder.com/1200x400?text=Slide+3', 
    alt: 'Slide 3',
    title: 'Join a Global Community',
    description: 'Connect with students and alumni from around the world. Build a network that supports your growth and success.'
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Carousel Section */}
      <section className="py-20 px-4">
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
    </div>
  );
};
