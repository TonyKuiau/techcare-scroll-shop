
import { useState } from "react";
import { ArrowLeft, ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentLicenseIndex, setCurrentLicenseIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedLicense, setSelectedLicense] = useState(null);

  // Service data
  const services = [
    {
      id: 1,
      title: "Screen Repair",
      description: "Professional screen replacement for all mobile devices.",
      icon: "📱",
      fullDescription: "Our expert technicians can replace broken screens on iPhones, Samsung, Google, and other major brands. We use only high-quality parts and offer a 90-day warranty on all repairs.",
      price: "Starting at K149.99"
    },
    {
      id: 2,
      title: "Battery Replacement",
      description: "Restore your device's battery life with our replacement service.",
      icon: "🔋",
      fullDescription: "Battery losing charge too quickly? We can replace batteries for all major phone and tablet models, usually within 1 hour. All battery replacements come with a 6-month warranty.",
      price: "Starting at K129.99"
    },
    {
      id: 3,
      title: "Data Recovery",
      description: "Recover lost data from damaged or malfunctioning devices.",
      icon: "💾",
      fullDescription: "Our specialized data recovery service can help retrieve photos, messages, contacts and other important data from water-damaged, broken or non-functional devices. Success rate over 85%.",
      price: "Starting at K179.99"
    },
    {
      id: 4,
      title: "System Optimization",
      description: "Speed up your device and improve performance.",
      icon: "⚡",
      fullDescription: "Is your device running slow? Our optimization service includes removing bloatware, clearing cache, updating software, and optimizing settings for better performance and battery life.",
      price: "Starting at K99.99"
    }
  ];

  // Software license data
  const licenses = [
    {
      id: 1,
      title: "Mobile Antivirus Pro",
      description: "Complete protection against malware and viruses.",
      icon: "🔒",
      fullDescription: "Our premium antivirus solution provides real-time protection against malware, phishing attacks, and ransomware. Includes VPN service and identity protection features.",
      price: "K74.99/year"
    },
    {
      id: 2,
      title: "Cloud Backup Premium",
      description: "Automatic cloud backup for all your important data.",
      icon: "☁️",
      fullDescription: "Never lose important photos or documents again. Our cloud backup service automatically syncs your data to secure cloud storage, accessible from any device. Includes 500GB of storage.",
      price: "K59.99/year"
    },
    {
      id: 3,
      title: "Photo Editor Pro",
      description: "Professional photo editing tools for mobile.",
      icon: "🖼️",
      fullDescription: "Transform your mobile photography with our professional-grade editing tools. Includes filters, effects, retouching tools, and advanced color correction features.",
      price: "K44.99"
    }
  ];

  // Navigation function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Service carousel navigation
  const showNextService = () => {
    setCurrentServiceIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevService = () => {
    setCurrentServiceIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // License carousel navigation
  const showNextLicense = () => {
    setCurrentLicenseIndex((prevIndex) => 
      prevIndex === licenses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevLicense = () => {
    setCurrentLicenseIndex((prevIndex) => 
      prevIndex === 0 ? licenses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-[#221F26] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-norwester mb-6">Unlockim Fone PNG</h1>
            <p className="text-xl md:text-2xl mb-8">Expert repair services for all your mobile devices in Papua New Guinea</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg" 
                className="bg-png-gold text-png-black hover:bg-png-gold/90 font-medium"
              >
                Our Services
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-norwester text-png-red">Unlockim Fone PNG</div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('services')} className="hover:text-png-red">Services</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-png-red">About Us</button>
                <button onClick={() => scrollToSection('shop')} className="hover:text-png-red">Shop</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-png-red">Contact</button>
              </div>
              <div className="md:hidden">
                {/* Mobile menu button would go here */}
                <Button variant="ghost" size="sm">Menu</Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-norwester text-center mb-12 text-png-red">Our Services</h2>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" onClick={showPrevService} aria-label="Previous service" className="border-png-black text-png-black">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {[
                currentServiceIndex === 0 ? services.length - 1 : currentServiceIndex - 1,
                currentServiceIndex,
                (currentServiceIndex + 1) % services.length
              ].map((index, i) => (
                <Card 
                  key={services[index].id} 
                  className={`transform transition-all duration-300 ${i === 1 ? 'scale-105 shadow-lg border-png-red' : 'scale-95 opacity-70'}`}
                >
                  <CardHeader>
                    <div className="text-4xl mb-2 text-center">{services[index].icon}</div>
                    <CardTitle className="font-norwester">{services[index].title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{services[index].description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full border-png-red text-png-red hover:bg-png-red hover:text-white"
                      onClick={() => setSelectedService(services[index])}
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={showNextService} aria-label="Next service" className="border-png-black text-png-black">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">We offer a wide range of repair services for all major brands</p>
            <Button onClick={() => scrollToSection('contact')} className="bg-png-red hover:bg-png-red/90">Book a Repair</Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-norwester text-center mb-12 text-png-red">About Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-norwester mb-4 text-png-black">Your Trusted Repair Experts in PNG</h3>
                <p className="text-gray-700 mb-4">
                  Unlockim Fone PNG has been providing expert repair services since 2010. Our certified technicians have the knowledge and experience to fix any issue with your mobile devices.
                </p>
                <p className="text-gray-700 mb-4">
                  We pride ourselves on fast, reliable service and customer satisfaction. All repairs come with a warranty, and we use only high-quality replacement parts.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2 text-png-red">✓</span> Certified technicians
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-png-red">✓</span> Quality replacement parts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-png-red">✓</span> Fast turnaround times
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-png-red">✓</span> Warranty on all repairs
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={4/3}>
                  <div className="bg-gradient-to-br from-png-red to-png-black w-full h-full flex items-center justify-center">
                    <span className="text-6xl">🔧👨‍💻</span>
                  </div>
                </AspectRatio>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">Thousands of satisfied customers across Papua New Guinea trust us with their devices</p>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-png-red text-png-red hover:bg-png-red hover:text-white">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-norwester text-center mb-12 text-png-red">Software Shop</h2>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" onClick={showPrevLicense} aria-label="Previous license" className="border-png-black text-png-black">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {[
                currentLicenseIndex === 0 ? licenses.length - 1 : currentLicenseIndex - 1,
                currentLicenseIndex,
                (currentLicenseIndex + 1) % licenses.length
              ].map((index, i) => (
                <Card 
                  key={licenses[index].id} 
                  className={`transform transition-all duration-300 ${i === 1 ? 'scale-105 shadow-lg border-png-red' : 'scale-95 opacity-70'}`}
                >
                  <CardHeader>
                    <div className="text-4xl mb-2 text-center">{licenses[index].icon}</div>
                    <CardTitle className="font-norwester">{licenses[index].title}</CardTitle>
                    <CardDescription className="font-bold text-png-red">{licenses[index].price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{licenses[index].description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedLicense(licenses[index])}
                      className="border-png-red text-png-red hover:bg-png-red hover:text-white"
                    >
                      Details
                    </Button>
                    <Button className="bg-png-gold text-png-black hover:bg-png-gold/90">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={showNextLicense} aria-label="Next license" className="border-png-black text-png-black">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Protect and enhance your device with our software solutions</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-norwester text-center mb-12 text-png-red">Contact Us</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-norwester mb-4 text-png-black">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                Have questions or need to book a repair? Contact us and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-png-red mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(675) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-png-red mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@unlockimfonepng.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-png-red mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Waigani Drive, Port Moresby, Papua New Guinea</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-png-red mt-1" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 9am-6pm</p>
                    <p className="text-gray-600">Saturday: 10am-4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-norwester mb-4 text-png-black">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-png-red"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-png-red"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-png-red"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-png-red hover:bg-png-red/90">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-png-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-norwester mb-4 text-png-gold">Unlockim Fone PNG</h3>
              <p className="text-gray-400">Your trusted repair experts in Papua New Guinea since 2010</p>
            </div>
            
            <div>
              <h4 className="text-lg font-norwester mb-4 text-png-gold">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-png-gold">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-png-gold">About Us</button></li>
                <li><button onClick={() => scrollToSection('shop')} className="text-gray-400 hover:text-png-gold">Shop</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-png-gold">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-norwester mb-4 text-png-gold">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Screen Repair</span></li>
                <li><span className="text-gray-400">Battery Replacement</span></li>
                <li><span className="text-gray-400">Data Recovery</span></li>
                <li><span className="text-gray-400">System Optimization</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-norwester mb-4 text-png-gold">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-png-gold">
                  <span className="sr-only">Facebook</span>
                  📱
                </a>
                <a href="#" className="text-gray-400 hover:text-png-gold">
                  <span className="sr-only">Twitter</span>
                  💻
                </a>
                <a href="#" className="text-gray-400 hover:text-png-gold">
                  <span className="sr-only">Instagram</span>
                  📞
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Unlockim Fone PNG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Service Dialog */}
      <Dialog 
        open={selectedService !== null} 
        onOpenChange={(open) => !open && setSelectedService(null)}
      >
        {selectedService && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-norwester text-png-red">{selectedService.title}</DialogTitle>
              <DialogDescription>
                <div className="mt-4 space-y-3">
                  <p>{selectedService.fullDescription}</p>
                  <p className="font-semibold text-png-red">{selectedService.price}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end">
              <Button onClick={() => scrollToSection('contact')} className="bg-png-red hover:bg-png-red/90">Book Now</Button>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* License Dialog */}
      <Dialog 
        open={selectedLicense !== null} 
        onOpenChange={(open) => !open && setSelectedLicense(null)}
      >
        {selectedLicense && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-norwester text-png-red">{selectedLicense.title}</DialogTitle>
              <DialogDescription>
                <div className="mt-4 space-y-3">
                  <p>{selectedLicense.fullDescription}</p>
                  <p className="font-semibold text-png-red">{selectedLicense.price}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedLicense(null)} className="border-png-red text-png-red hover:bg-png-red hover:text-white">
                Cancel
              </Button>
              <Button className="bg-png-gold text-png-black hover:bg-png-gold/90">Add to Cart</Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Index;
