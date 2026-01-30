import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Trash2, Plus } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface OrderItem {
  id: string;
  dishName: string;
  quantity: number;
}

const Order = () => {
  const { toast } = useToast();
  // const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: '1', dishName: '', quantity: 1 }
  ]);
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specifications: '',
  });

  const handleAddDish = () => {
    const newId = (Math.max(...orderItems.map(item => parseInt(item.id)), 0) + 1).toString();
    setOrderItems([...orderItems, { id: newId, dishName: '', quantity: 1 }]);
  };

  const handleRemoveDish = (id: string) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter(item => item.id !== id));
    } else {
      toast({
        title: 'Au moins un plat est requis',
        variant: 'destructive',
      });
    }
  };

  const handleDishChange = (id: string, field: 'dishName' | 'quantity', value: string) => {
    setOrderItems(orderItems.map(item =>
      item.id === id
        ? { ...item, [field]: field === 'quantity' ? parseInt(value) || 1 : value }
        : item
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: 'Veuillez remplir tous les champs obligatoires',
        variant: 'destructive',
      });
      return;
    }

    if (orderItems.some(item => !item.dishName)) {
      toast({
        title: 'Veuillez remplir tous les noms de plats',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: 'Commande Reçue',
      description: 'Merci, nous traiterons votre commande rapidement.',
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
                Commande Reçue
              </h2>
              <p className="text-muted-foreground mb-8">
                Merci, {formData.name} ! Votre commande a bien été enregistrée.
              </p>
              <div className="text-muted-foreground text-sm mb-8">
                <p className="font-semibold mb-2">Plats commandés:</p>
                {orderItems.map(item => (
                  <p key={item.id}>{item.dishName} x{item.quantity}</p>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-8">
                Un email de confirmation sera envoyé à <span className="text-foreground">{formData.email}</span>.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    guests: '2',
                    specifications: '',
                  });
                  setOrderItems([{ id: '1', dishName: '', quantity: 1 }]);
                }}
                className="btn-primary px-8"
              >
                Passer une Nouvelle Commande
              </Button>
            </motion.div>
          </AnimatedSection>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative pt-32 pb-16 bg-espresso">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
              Passer une Commande
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Commandez Maintenant
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Profitez de nos délicieuses spécialités culinaires. Commandez vos plats favoris et savourez la qualité de notre cuisine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-display text-2xl font-semibold mb-8">Vos Informations</h2>

                <div className="space-y-2">
                  <Label htmlFor="name">Nom Complet *</Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white border-border"
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
                    className="bg-white border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 1 23 45 67 89"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white border-border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="bg-white border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Heure *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="bg-white border-border"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-lg font-semibold">Vos Plats *</h3>
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-3 items-end">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor={`dish-${item.id}`}>Nom du Plat</Label>
                        <Input
                          id={`dish-${item.id}`}
                          placeholder="Ex: Steak Frites, Pizza Margherita..."
                          value={item.dishName}
                          onChange={(e) => handleDishChange(item.id, 'dishName', e.target.value)}
                          className="bg-white border-border"
                        />
                      </div>
                      <div className="w-20 space-y-2">
                        <Label htmlFor={`qty-${item.id}`}>Quantité</Label>
                        <Input
                          id={`qty-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleDishChange(item.id, 'quantity', e.target.value)}
                          className="bg-white border-border"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveDish(item.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddDish}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un Plat
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specifications">Précisions / Spécifications</Label>
                  <Textarea
                    id="specifications"
                    placeholder="Allergies, restrictions alimentaires, cuisson, préférences..."
                    value={formData.specifications}
                    onChange={(e) => handleInputChange('specifications', e.target.value)}
                    className="bg-white border-border min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-6 text-sm uppercase tracking-widest">
                  Confirmer la Commande
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
