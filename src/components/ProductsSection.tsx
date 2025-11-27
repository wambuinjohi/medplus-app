import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  url: string;
}

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'Bandages, Tapes and Dressings',
      slug: 'bandages-tapes-and-dressings',
      icon: '🩹',
      description: 'High-quality bandages, tapes, and medical dressings for wound care and protection. Our selection includes sterile and non-sterile options suitable for various medical applications.',
      url: 'https://alphamedicalafrica.com/product-category/bandages-tapes-and-dressings/'
    },
    {
      id: '2',
      name: 'Bottles and Containers',
      slug: 'bottles-and-containers',
      icon: '🧴',
      description: 'Medical-grade bottles and containers for safe storage and transportation of pharmaceutical products, specimens, and medical solutions.',
      url: 'https://alphamedicalafrica.com/product-category/bottles-and-containers/'
    },
    {
      id: '3',
      name: 'Catheters and Tubes',
      slug: 'catheters-and-tubes',
      icon: '🔬',
      description: 'Premium catheters and medical tubing for various clinical procedures. Sterile, latex-free options available for patient safety.',
      url: 'https://alphamedicalafrica.com/product-category/catheters-and-tubes/'
    },
    {
      id: '4',
      name: 'Cotton Wool',
      slug: 'cotton-wool',
      icon: '☁️',
      description: 'Pure cotton wool products for medical and healthcare applications. Sterilized and packaged for hospital use.',
      url: 'https://alphamedicalafrica.com/product-category/cotton-wool/'
    },
    {
      id: '5',
      name: 'Diapers and Sanitary',
      slug: 'diapers-and-sanitary',
      icon: '👶',
      description: 'Medical-grade incontinence products and sanitary supplies for hospitals and care facilities.',
      url: 'https://alphamedicalafrica.com/product-category/diapers-and-sanitary/'
    },
    {
      id: '6',
      name: 'Gloves',
      slug: 'gloves',
      icon: '🧤',
      description: 'Protective medical gloves in latex, nitrile, and vinyl options. Available in multiple sizes for clinical and non-clinical use.',
      url: 'https://alphamedicalafrica.com/product-category/gloves/'
    },
    {
      id: '7',
      name: 'Hospital Equipments',
      slug: 'hospital-equipments',
      icon: '🏥',
      description: 'Essential hospital equipment including monitors, stands, carts, and other critical care devices for healthcare facilities.',
      url: 'https://alphamedicalafrica.com/product-category/hospital-equipments/'
    },
    {
      id: '8',
      name: 'Hospital Furniture',
      slug: 'hospital-furniture',
      icon: '🛏️',
      description: 'Professional hospital beds, patient chairs, examination tables, and healthcare furniture designed for comfort and durability.',
      url: 'https://alphamedicalafrica.com/product-category/hospital-furniture/'
    },
    {
      id: '9',
      name: 'Hospital Instruments',
      slug: 'hospital-instruments',
      icon: '⚕️',
      description: 'Surgical and diagnostic instruments including forceps, specula, scissors, and other precision medical tools.',
      url: 'https://alphamedicalafrica.com/product-category/hospital-instruments/'
    },
    {
      id: '10',
      name: 'Hospital Linen',
      slug: 'hospital-linen',
      icon: '🧻',
      description: 'Medical-grade linens including sheets, pillowcases, and gowns. Sterilizable and designed for healthcare settings.',
      url: 'https://alphamedicalafrica.com/product-category/hospital-linen/'
    },
    {
      id: '11',
      name: 'Infection Control',
      slug: 'infection-control',
      icon: '🛡️',
      description: 'Comprehensive infection prevention products including disinfectants, sterilization equipment, and protective barriers.',
      url: 'https://alphamedicalafrica.com/product-category/infection-control/'
    },
    {
      id: '12',
      name: 'PPE',
      slug: 'ppe',
      icon: '👕',
      description: 'Personal Protective Equipment including gowns, masks, respirators, and face shields for healthcare workers and patients.',
      url: 'https://alphamedicalafrica.com/product-category/ppe/'
    },
    {
      id: '13',
      name: 'Spirits, Detergents and Disinfectants',
      slug: 'spirits-detergents-and-disinfectants',
      icon: '🧼',
      description: 'Pharmaceutical-grade disinfectants, cleaning agents, and sterilization solutions for hospital sanitation.',
      url: 'https://alphamedicalafrica.com/product-category/spirits-detergents-and-disinfectants/'
    },
    {
      id: '14',
      name: 'Syringes and Needles',
      slug: 'syringes-and-needles',
      icon: '💉',
      description: 'Sterile syringes and needles in various gauges and sizes. Single-use, safety-engineered options available.',
      url: 'https://alphamedicalafrica.com/product-category/syringes-and-needles/'
    },
    {
      id: '15',
      name: 'Others',
      slug: 'others',
      icon: '📦',
      description: 'Additional medical supplies and healthcare products not covered in other categories.',
      url: 'https://alphamedicalafrica.com/product-category/others/'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of medical supplies and healthcare products for hospitals, clinics, and healthcare facilities
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1 hover:border-blue-300 text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-green-500/0 group-hover:from-blue-500/5 group-hover:to-green-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{product.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Description Preview */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-green-600 transition-colors">
                  View Details
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 flex justify-between items-start">
              <div>
                <div className="text-5xl mb-4">{selectedProduct.icon}</div>
                <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About this product category</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features/Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Premium quality medical-grade products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Sterilized and safety certified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Competitive pricing and bulk discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Fast and reliable delivery</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="flex gap-4">
                <a
                  href={selectedProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center hover:scale-105"
                >
                  Browse Products
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
