import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Veuillez remplir tous les champs obligatoires',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Message Envoyé',
      description: 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Zogbadjè, Cité la Victoire \n Abomey-Calavi, Bénin',
      action: {
        label: 'Itinéraire',
        href: 'https://maps.google.com/?q=123+Avenue+Gastronomique+Paris',
      },
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+2290167109440',
      action: {
        label: 'Appeler',
        href: 'tel:+2290167109440',
      },
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'akakpogodwin@gmail.com',
      action: {
        label: 'Envoyer un Email',
        href: 'mailto:akakpogodwin@gmail.com',
      },
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Dim : 08h00 - 23h30 \n Disponible pour vous acceuillir',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-espresso">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
              Contactez-Nous
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Nous Contacter
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Vous avez une question ou une demande spéciale ? Nous serions ravis de vous entendre. 
              Contactez-nous et notre équipe se fera un plaisir de vous aider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
                    Visitez La Maison
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Situé au cœur de Paris, La Maison offre une évasion élégante 
                    pour les gourmets à la recherche d'une expérience culinaire extraordinaire.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="card-elevated p-6"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line mb-3">
                        {item.content}
                      </p>
                      {item.action && (
                        <a
                          href={item.action.href}
                          target={item.action.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          {item.action.label} →
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-display text-lg mb-4">Suivez-Nous</h3>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 rounded-full bg-cream flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="card-elevated p-8">
                <h2 className="font-display text-2xl mb-6">Envoyer un Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom *</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.fr"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-background border-border min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full py-6 text-sm uppercase tracking-widest">
                    Envoyer le Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158746132895!2d2.2944813!3d48.8698305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0x5f5f30a4a8d2c3b!2sChamps-%C3%89lys%C3%A9es%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation de La Maison"
          className="grayscale contrast-100 hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </Layout>
  );
};

export default Contact;
