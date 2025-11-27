import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    {
      label: 'Our Products',
      href: '#',
      submenu: [
        'Bandages, Tapes and Dressings',
        'Bottles and Containers',
        'Catheters and Tubes',
        'Cotton Wool',
        'Diapers and Sanitary',
        'Gloves',
        'Hospital Equipments',
        'Hospital Furniture',
        'Hospital Instruments',
        'Hospital Linen',
        'Infection Control',
        'Others',
        'PPE',
        'Spirits, Detergents and Disinfectants',
        'Syringes and Needles',
      ],
    },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Media', href: '#' },
    { label: 'Offers', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  const partners = [
    'International Rescue Committee',
    'Bomu Hospital',
    'FAO',
    'Gertrudes Childrens Hospital',
    'JHPIEGO',
    'KEMSA',
    'Kenya Ports Authority',
    'Kenya Red Cross Society',
    'MEDS',
    'Metro',
    'MTRH',
    'PSI',
    'UNHCR',
  ];

  const productCategories = [
    'Diapers and Sanitary',
    'Bandages, Tapes and Dressings',
    'Hospital Instruments',
    'Bottles and Containers',
    'Catheters and Tubes',
    'Infection Control',
    'Others',
    'Cotton Wool',
    'Spirits, Detergents and Disinfectants',
    'Gloves',
    'PPE',
    'Hospital Linen',
    'Hospital Equipments',
    'Syringes and Needles',
    'Hospital Furniture',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">Alpha Medical</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={16} />}
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-10">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      item.submenu && setProductsDropdownOpen(!productsDropdownOpen)
                    }
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded flex justify-between items-center"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {item.submenu && productsDropdownOpen && (
                    <div className="bg-gray-50 pl-4">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">SINCE 1989</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                World Class Critical Care, Hospital Consumables and Furniture Distributors.
              </p>
              <p className="text-blue-100 text-lg">
                Bettering lives together.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 rounded-lg p-12 backdrop-blur-sm">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">25+</div>
                  <p className="text-xl">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600">
              Committed to delivering excellence in healthcare solutions across Africa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">
                Supply only the highest quality hospital consumables and equipment
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Make quality healthcare products accessible to all institutions
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Reliable and timely delivery across Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">
              Trusted by leading healthcare institutions across Africa
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-32 hover:shadow-md transition"
              >
                <p className="text-center text-sm text-gray-700 font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your healthcare supply needs
          </p>
          <a href="#contact" className="inline-block">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <div className="text-gray-600 space-y-2">
                <p className="font-semibold">Corporate Office</p>
                <p>Westside Towers, First Floor</p>
                <p>Suite 103, Lower Kebete Road</p>
                <p className="mt-4 font-semibold">Warehouse</p>
                <p>Road C, Off Enterprise Road</p>
                <p>Industrial Area</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Products</h3>
              <ul className="text-gray-600 space-y-2">
                {productCategories.slice(0, 7).map((cat) => (
                  <li key={cat}>
                    <a href="#" className="hover:text-blue-600">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <div className="text-gray-600 space-y-2">
                <p>
                  <a href="mailto:sales@alphamedicalafrica.com" className="hover:text-blue-600">
                    sales@alphamedicalafrica.com
                  </a>
                </p>
                <p>
                  <a href="mailto:admin@alphamedicalafrica.com" className="hover:text-blue-600">
                    admin@alphamedicalafrica.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
              <div className="text-gray-600 space-y-2">
                <p>
                  <a href="tel:+254734785363" className="hover:text-blue-600">
                    +254 734 785 363
                  </a>
                </p>
                <p>
                  <a href="tel:+254721504000" className="hover:text-blue-600">
                    +254 721 504 000
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-400">
                © 2025 Alpha Medical Manufacturers Limited. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2">
                Bettering lives together.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Go to App Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.521h-2.881v4.771h-3.612v-4.771H9.325v-3.104h1.703v-1.899c0-1.82.387-4.456 4.203-4.456 1.162 0 2.167.086 2.167.086v2.543h-1.486c-1.203 0-1.435.573-1.435 1.423v1.862h3.872l-.504 3.104z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
