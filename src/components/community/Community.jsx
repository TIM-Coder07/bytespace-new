export default function CommunityTestimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      quote: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
      quote: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#e3f6f5] via-[#faffd8] to-[#edf0fc] py-16 px-6 md:px-12 overflow-hidden font-sans">
      
      {/* Decorative blurred glowing spot in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d9f99d] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-lg leading-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-slate-200/50 flex flex-col justify-between border border-white/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* User Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                    <p className="text-blue-600 text-xs font-medium mt-0.5">{item.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}