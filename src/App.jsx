import { useState, useEffect } from 'react'
import { Gem, Sparkles, Settings, Shield, Crown, Truck, Package, AlertTriangle, Star, ChevronDown, ArrowRight, Check, MessageCircle, Briefcase, Lightbulb, Heart, Gift } from 'lucide-react'
import watchImage1 from './assets/podegar1.png'
import watchImage2 from './assets/podegar 2.png'
import watchImage3 from './assets/podegar 3.png'
import watchImage5 from './assets/podegar 5.jpeg'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    quantity: 1,
    address: '',
    city: '',
    state: ''
  })
  
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToForm = (e) => {
    e.preventDefault()
    document.getElementById('order-form').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `*NEW ORDER - POEDAGAR TIMELESS AUTHORITY WATCH*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${formData.firstName} ${formData.lastName}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A%0A` +
      `*Order Details:*%0A` +
      `Product: Poedagar Timeless Authority Watch%0A` +
      `Quantity: ${formData.quantity}%0A` +
      `Total: ₦${(40000 * formData.quantity).toLocaleString()}%0A%0A` +
      `*Delivery Address:*%0A` +
      `${formData.address}%0A` +
      `${formData.city}, ${formData.state}%0A%0A` +
      `Payment Method: Pay on Delivery`

    window.open(`https://wa.me/2348038880181?text=${message}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center px-4 py-16 md:py-20 lg:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto z-10 w-full">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Text Content */}
            <div className={`text-center lg:text-left lg:ml-8 xl:ml-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block mb-4 lg:mb-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent tracking-tight leading-none">
                  POEDAGAR
                </h1>
                <p className="text-base sm:text-lg lg:text-base xl:text-lg font-light text-amber-100/90 tracking-widest">
                  TIMELESS AUTHORITY
                </p>
              </div>
              
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent lg:mx-0 mx-auto my-5 lg:my-3"></div>
              
              <div className="space-y-2 mb-6 lg:mb-5 max-w-lg mx-auto lg:mx-0">
                <p className="text-base sm:text-lg lg:text-base text-gray-300 font-light leading-relaxed">
                  There's a reason powerful men (and women) are noticed before they speak.
                </p>
                <p className="text-sm sm:text-base lg:text-sm text-amber-400 italic font-medium">
                  It's not noise — it's presence.
                </p>
              </div>
              
              <p className="text-sm sm:text-base lg:text-sm mb-6 lg:mb-5 text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                More than a timepiece — it's a statement of <span className="text-amber-400 font-semibold">confidence</span>, <span className="text-amber-400 font-semibold">class</span>, and <span className="text-amber-400 font-semibold">control</span>.
              </p>
              
              {/* Quick Features - Desktop Only */}
              <div className="hidden lg:grid grid-cols-2 gap-2 xl:gap-3 mb-5 max-w-lg">
                <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span>Premium Steel Finish</span>
                </div>
                <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span>Rose Gold & Silver</span>
                </div>
                <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span>Scratch-Resistant Glass</span>
                </div>
                <div className="flex items-center gap-2 text-xs xl:text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <span>Pay on Delivery</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-3">
                <button 
                  onClick={scrollToForm}
                  className="group relative px-8 md:px-10 lg:px-8 py-3.5 md:py-4 lg:py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold text-base lg:text-sm xl:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 inline-flex items-center gap-2"
                >
                  <span className="relative z-10">ORDER NOW</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="text-center sm:text-left">
                  <p className="text-2xl lg:text-xl xl:text-2xl font-bold text-amber-400">₦40,000</p>
                  <p className="text-xs lg:text-[10px] xl:text-xs text-gray-500">Fast Nationwide Delivery</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} mt-8 lg:mt-0`}>
              <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-full lg:mr-8 xl:mr-12">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 blur-3xl animate-pulse"></div>
                <div className="relative">
                  <img 
                    src={watchImage1} 
                    alt="POEDAGAR Timeless Authority Watch" 
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -top-3 -right-3 lg:-top-2 lg:-right-2 xl:-top-3 xl:-right-3 bg-gradient-to-br from-red-600 to-amber-600 text-white px-3 py-1.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 rounded-full shadow-xl rotate-12 animate-pulse hidden lg:block">
                    <p className="text-[10px] xl:text-xs font-bold leading-tight">LIMITED</p>
                    <p className="text-[10px] xl:text-xs leading-tight">STOCK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-amber-400" strokeWidth={2} />
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Every Angle. <span className="text-amber-400">Pure Elegance.</span>
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16 italic">
            See the craftsmanship that makes Poedagar extraordinary
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={watchImage2} 
                alt="Poedagar Watch Detail View" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg">Premium Finish</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={watchImage3} 
                alt="Poedagar Watch Lifestyle" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg">Executive Style</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={watchImage5} 
                alt="Poedagar Watch Close Up" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-lg">Precision Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Poedagar Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="text-amber-400">Poedagar</span>?
          </h2>
          <p className="text-xl text-center text-gray-400 mb-16 italic">
            Because real style doesn't shout — it commands attention.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Gem, text: 'Premium stainless steel finish' },
              { icon: Sparkles, text: 'Elegant two-tone rose gold & silver design' },
              { icon: Settings, text: 'Precision chronograph movement' },
              { icon: Shield, text: 'Scratch-resistant glass' },
              { icon: Crown, text: 'Luxury feel without the luxury price' }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-amber-400 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-lg text-gray-300 pt-1">{feature.text}</p>
                </div>
              )
            })}
          </div>
          
          <p className="text-xl text-center text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Whether you're closing deals, attending events, or stepping out for a special moment — Poedagar completes your look effortlessly.
          </p>
          
          <div className="text-center">
            <button 
              onClick={scrollToForm}
              className="px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 inline-flex items-center gap-2"
            >
              ORDER NOW
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            For Men & Women Who <span className="text-amber-400">Mean Business</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                icon: Briefcase, 
                title: 'Executives',
                description: 'Command respect in boardrooms',
                gradient: 'from-blue-500/20 to-cyan-500/20'
              },
              { 
                icon: Lightbulb, 
                title: 'Entrepreneurs',
                description: 'Innovation meets elegance',
                gradient: 'from-purple-500/20 to-pink-500/20'
              },
              { 
                icon: Heart, 
                title: 'Stylish Couples',
                description: 'Matching sophistication',
                gradient: 'from-red-500/20 to-rose-500/20'
              },
              { 
                icon: Gift, 
                title: 'Gift-worthy',
                description: 'For special celebrations',
                gradient: 'from-amber-500/20 to-yellow-500/20'
              }
            ].map((audience, index) => {
              const IconComponent = audience.icon
              return (
                <div 
                  key={index} 
                  className="group relative p-8 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                      <IconComponent className="w-8 h-8 text-black" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{audience.title}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{audience.description}</p>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )
            })}
          </div>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-2xl"></div>
            <p className="relative text-2xl md:text-3xl font-light text-gray-200 italic px-8 py-4">
              This is the watch people <span className="text-amber-400 font-semibold">notice</span>, <span className="text-amber-400 font-semibold">ask about</span>, and <span className="text-amber-400 font-semibold">admire</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Price & <span className="text-amber-400">Offer</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl"></div>
                <img 
                  src={watchImage1} 
                  alt="POEDAGAR Watch - ₦40,000" 
                  className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Pricing Details */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-2xl border-2 border-amber-500 mb-8">
                <div className="text-6xl font-bold text-amber-400 mb-4">₦40,000</div>
                <div className="space-y-4">
                  <p className="text-xl text-gray-300 flex items-center gap-3">
                    <Truck className="w-7 h-7 text-amber-400 flex-shrink-0" strokeWidth={1.5} />
                    <span>Payment Method: <span className="text-amber-400 font-semibold">Pay on Delivery</span></span>
                  </p>
                  <p className="text-xl text-gray-300 flex items-center gap-3">
                    <Package className="w-7 h-7 text-amber-400 flex-shrink-0" strokeWidth={1.5} />
                    <span>Fast & Secure Delivery Nationwide</span>
                  </p>
                </div>
              </div>
              
              <div className="mb-8 text-center lg:text-left">
                <p className="text-2xl font-bold text-gray-200 mb-2">No stories. No risk.</p>
                <p className="text-xl text-amber-400">Inspect before you pay.</p>
              </div>
              
              <button 
                onClick={scrollToForm}
                className="w-full px-12 py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold text-xl rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 inline-flex items-center justify-center gap-2"
              >
                ORDER NOW
                <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Customers <span className="text-amber-400">Love It</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Testimonial Cards */}
            <div className="space-y-6">
              {[
                "Looks even better in real life.",
                "Heavy, classy, and premium.",
                "People keep asking where I got it."
              ].map((testimonial, index) => (
                <div key={index} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="text-lg text-gray-300 italic">"{testimonial}"</p>
                </div>
              ))}
            </div>
            
            {/* Lifestyle Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 blur-2xl"></div>
              <img 
                src={watchImage2} 
                alt="Customer wearing POEDAGAR watch" 
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-400 mb-2">This is not a random watch.</p>
            <p className="text-3xl font-bold text-amber-400">This is Poedagar.</p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-amber-400 animate-pulse" strokeWidth={2} />
            <h3 className="text-3xl md:text-4xl font-bold text-amber-400">
              Limited Stock Available
            </h3>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Demand is high and stock is limited.<br/>
            Once this batch is sold out, price may increase.
          </p>
          <button 
            onClick={scrollToForm}
            className="px-10 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none inline-flex items-center gap-2"
          >
            ORDER NOW - DON'T MISS OUT
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ArrowRight className="w-10 h-10 text-amber-400" strokeWidth={2} />
              <h2 className="text-4xl md:text-5xl font-bold">
                Fill the Form Below
              </h2>
            </div>
            <p className="text-2xl text-amber-400 mb-8">Order Now & Upgrade Your Presence</p>
            
            {/* Small product preview */}
            <div className="flex justify-center mb-8">
              <img 
                src={watchImage5} 
                alt="Poedagar Watch" 
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-500/50"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 md:p-12 rounded-2xl border border-amber-500/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Quantity *</label>
              <input
                type="number"
                name="quantity"
                min="1"
                required
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
              />
              <p className="text-amber-400 mt-2 font-semibold">
                Total: ₦{(40000 * formData.quantity).toLocaleString()}
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-semibold">Delivery Address *</label>
              <textarea
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Input Delivery Address"
                rows="3"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
              ></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">State *</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white transition-all"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold text-xl rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50 inline-flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
              COMPLETE ORDER VIA WHATSAPP
            </button>
            
            <p className="text-center text-gray-400 mt-4 text-sm">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center text-gray-500">
        <p>&copy; 2026 Poedagar. Timeless Authority.</p>
      </footer>
    </div>
  )
}

export default App
