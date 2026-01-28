import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import gallery1 from '@/assets/gallery-1.jpg';

const Reservation = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    requests: '',
  });

  const timeSlots = [
    '12h00', '12h30', '13h00', '13h30', '14h00',
    '19h00', '19h30', '20h00', '20h30', '21h00', '21h30', '22h00'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '10+'];
  
  const occasions = ['Anniversaire', 'Fête', 'Dîner d\'affaires', 'Soirée en amoureux', 'Célébration', 'Autre'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: 'Veuillez remplir tous les champs obligatoires',
        variant: 'destructive',
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: 'Demande de Réservation Reçue',
      description: 'Nous confirmerons votre réservation sous peu.',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center section-padding">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-center max-w-md mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-primary" />
              </motion.div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Réservation Reçue
              </h2>
              <p className="text-muted-foreground mb-8">
                Merci, {formData.name} ! Nous avons bien reçu votre demande de réservation pour le{' '}
                <span className="text-foreground font-medium">{formData.date}</span> à{' '}
                <span className="text-foreground font-medium">{formData.time}</span> pour{' '}
                <span className="text-foreground font-medium">{formData.guests}</span> {formData.guests === '1' ? 'personne' : 'personnes'}.
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                Un email de confirmation sera envoyé à <span className="text-foreground">{formData.email}</span> sous peu.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary px-8"
              >
                Faire une Autre Réservation
              </Button>
            </motion.div>
          </AnimatedSection>
        </section>
      </Layout>
    );
  }

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
              Rejoignez-Nous
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Réserver une Table
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Commencez votre voyage culinaire avec nous. Réservez votre table et laissez-nous 
              créer une expérience gastronomique inoubliable pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-cream border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean@exemple.fr"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-cream border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 1 23 45 67 89"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-cream border-border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-cream border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Heure *
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleInputChange('time', value)}
                    >
                      <SelectTrigger className="bg-cream border-border">
                        <SelectValue placeholder="Choisir l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Convives *
                    </Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange('guests', value)}
                    >
                      <SelectTrigger className="bg-cream border-border">
                        <SelectValue placeholder="Nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((num) => (
                          <SelectItem key={num} value={num}>
                            {num} {num === '1' ? 'Personne' : 'Personnes'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Occasion (Optionnel)</Label>
                  <Select
                    value={formData.occasion}
                    onValueChange={(value) => handleInputChange('occasion', value)}
                  >
                    <SelectTrigger className="bg-cream border-border">
                      <SelectValue placeholder="Choisir l'occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>
                          {occasion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests">Demandes Spéciales (Optionnel)</Label>
                  <Textarea
                    id="requests"
                    placeholder="Allergies, restrictions alimentaires, préférences de placement..."
                    value={formData.requests}
                    onChange={(e) => handleInputChange('requests', e.target.value)}
                    className="bg-cream border-border min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-6 text-sm uppercase tracking-widest">
                  Demander une Réservation
                </Button>

                <p className="text-muted-foreground text-sm text-center">
                  Pour les groupes de plus de 10 personnes, veuillez nous contacter directement au{' '}
                  <a href="tel:+33123456789" className="text-primary hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </p>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={gallery1}
                    alt="Salle de La Maison"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl mb-2">Horaires d'Ouverture</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        <span>Déjeuner (Mar - Dim)</span>
                        <span>12h00 - 14h30</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Dîner (Mar - Dim)</span>
                        <span>19h00 - 22h30</span>
                      </p>
                      <p className="text-sm italic">Fermé le lundi</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl mb-2">Code Vestimentaire</h3>
                    <p className="text-muted-foreground">
                      Tenue élégante décontractée. Nous demandons à nos convives de ne pas porter 
                      de vêtements de sport, shorts ou tongs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl mb-2">Politique d'Annulation</h3>
                    <p className="text-muted-foreground">
                      Veuillez nous prévenir au moins 24 heures à l'avance si vous devez 
                      annuler ou modifier votre réservation.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
