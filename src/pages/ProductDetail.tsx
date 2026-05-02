import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getProductById, getProducts } from '../services/api';
import type { Product } from '../data/products';
import { ArrowLeft, MessageSquare, ShieldCheck, Zap, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [catalog, setCatalog] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string>('');
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  React.useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError('');

    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message || 'Product not found'))
      .finally(() => setLoading(false));
  }, [id]);

  React.useEffect(() => {
    getProducts().then((data) => setCatalog(data)).catch(() => undefined);
  }, []);

  if (loading) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl">Loading product...</h1>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl">{error || 'Masterpiece not found'}</h1>
        <Link to="/gallery" className="text-gold mt-4 block">Return to Gallery</Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const recommended = catalog.filter((p) => p.id !== id).slice(0, 3);


  if (!product) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl">Masterpiece not found</h1>
        <Link to="/gallery" className="text-gold mt-4 block">Return to Gallery</Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isFavorited) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main className="pt-40 pb-32 max-w-7xl mx-auto px-6 md:px-12">
      <Link 
        to="/gallery" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors font-accent text-xs uppercase tracking-widest mb-12"
      >
        <ArrowLeft size={14} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-[3/4] bg-neutral-900 border border-white/5 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Mock extra images */}
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="aspect-square bg-neutral-900/50 border border-white/5 flex items-center justify-center opacity-40">
                <span className="text-[10px] uppercase font-accent">Detail View</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div>
            <span className="text-gold font-accent text-xs uppercase tracking-[0.3em] block mb-4">{product.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{product.title}</h1>
            <div className="gradient-divider w-32" />
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-300 italic font-serif leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-400 font-accent leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-accent text-xs uppercase tracking-widest text-gold">Masterpiece Features</h3>
            <ul className="grid grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-accent">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-neutral-900 border border-gold/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={60} className="text-gold" />
            </div>
            <h3 className="text-xl italic font-serif text-gold">Craftsmanship Details</h3>
            <p className="text-gray-400 text-sm font-accent">{product.craftsmanship}</p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-accent">
              <ShieldCheck size={12} className="text-emerald-500" /> Authenticity Guaranteed
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a 
              href={`https://wa.me/919000000000?text=I'm interested in ${product.title}`}
              className="flex-1 flex items-center justify-center gap-3 bg-gold text-luxury-bg font-accent font-bold uppercase tracking-widest py-5 hover:bg-gold-light transition-all shadow-xl shadow-gold/10"
            >
              <MessageSquare size={18} />
              Inquire Now
            </a>
            <button 
              onClick={toggleWishlist}
              className={`flex-1 border font-accent uppercase tracking-widest py-5 transition-all flex items-center justify-center gap-2 ${
                isFavorited ? 'bg-gold/10 border-gold text-gold' : 'border-gold/30 text-gold hover:bg-gold/5'
              }`}
            >
              <Heart size={18} fill={isFavorited ? "currentColor" : "none"} />
              {isFavorited ? 'Saved to Wishlist' : 'Save to Wishlist'}
            </button>
          </div>

          <p className="text-[10px] text-gray-500 font-accent uppercase tracking-widest text-center">
            * Every piece is bespoke. Actual delivery takes 4-6 weeks for artisanal handwork.
          </p>
        </motion.div>
      </div>

      {/* Recommendations */}
      <section className="mt-32 pt-20 border-t border-gold/10">
        <h2 className="text-3xl mb-12 italic">You May Also Admire</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommended.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group space-y-4">
              <div className="aspect-[3/4] bg-neutral-900 border border-white/5 overflow-hidden">
                <img 
                  src={p.images[0]} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </div>
              <div>
                <span className="text-[10px] text-gold font-accent uppercase tracking-widest">{p.category}</span>
                <h3 className="text-lg group-hover:text-gold transition-colors">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
