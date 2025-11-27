// src/components/restaurant/sections/contact.tsx

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  CalendarDays,
  Utensils,
} from "lucide-react";
import {
  FormRow,
  StyledDateInput,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  type SelectOption,
} from "../components/ui/form-elements";
import { SectionContainer } from "../components/restaurant/layout/SectionContainer";
import { SectionHeader } from "../components/restaurant/layout/SectionHeader";
import {
  DiamondSeparator,
  GoldDivider,
} from "../components/ui/decorative-elements";
import { GoldButton } from "../components/ui/gold-button";
import { restaurantInfo } from "../data/restaurant";

// Time options
const timeOptions: SelectOption[] = [
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "20:30", label: "8:30 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "21:30", label: "9:30 PM" },
];

// Guest options
const guestOptions: SelectOption[] = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "7", label: "7 Guests" },
  { value: "8+", label: "8+ Guests (Please call)" },
];

// Occasion options
const occasionOptions: SelectOption[] = [
  { value: "none", label: "No special occasion" },
  { value: "birthday", label: "Birthday Celebration" },
  { value: "anniversary", label: "Anniversary" },
  { value: "business", label: "Business Dinner" },
  { value: "date", label: "Date Night" },
  { value: "celebration", label: "Special Celebration" },
  { value: "other", label: "Other" },
];

// Form data interface
interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  message: string;
}

const initialFormData: ReservationFormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  occasion: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] =
    useState<ReservationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialFormData);
    }, 4000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    fieldName: keyof ReservationFormData
  ) => {
    return (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    };
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <SectionContainer
      id="contact"
      variant="gradient"
      size="large"
    >
      <SectionHeader
        label="Reservations"
        title={
          <>
            Begin Your{" "}
            <span className="italic text-primary">
              Journey
            </span>
          </>
        }
        subtitle="Reserve your table and experience the art of fine dining."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          <ContactInfoCard
            icon={MapPin}
            title="Location"
            variants={fadeInUp}
          >
            <p className="font-serif text-muted-foreground leading-relaxed">
              {restaurantInfo.address.street}
              <br />
              {restaurantInfo.address.neighborhood},{" "}
              {restaurantInfo.address.city},{" "}
              {restaurantInfo.address.state}{" "}
              {restaurantInfo.address.zip}
            </p>
          </ContactInfoCard>

          <ContactInfoCard
            icon={Phone}
            title="Reservations"
            variants={fadeInUp}
          >
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="font-serif text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {restaurantInfo.phone}
            </a>
          </ContactInfoCard>

          <ContactInfoCard
            icon={Mail}
            title="Email"
            variants={fadeInUp}
          >
            <a
              href={`mailto:${restaurantInfo.email}`}
              className="font-serif text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {restaurantInfo.email}
            </a>
          </ContactInfoCard>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="pt-4">
            <DiamondSeparator className="mb-6" />
            <p className="font-sans text-xs tracking-luxury text-muted-foreground mb-4 uppercase">
              Follow Us
            </p>
            <div className="flex gap-3">
              <SocialLink
                href={restaurantInfo.social.instagram}
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href={restaurantInfo.social.facebook}
                icon={Facebook}
                label="Facebook"
              />
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeInUp} className="pt-6">
            <HoursCard hours={restaurantInfo.hours} />
          </motion.div>
        </motion.div>

        {/* Right Column - Reservation Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative border border-primary/20 bg-card/30 backdrop-blur-sm p-6 md:p-8 hover:border-primary/30 transition-colors duration-300">
            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mx-auto mb-4 bg-primary/5">
                <Utensils className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                Request a Reservation
              </h3>
              <p className="font-serif text-sm text-muted-foreground italic">
                We'll confirm your booking within 24 hours
              </p>
            </div>

            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name */}
                <StyledInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  autoComplete="name"
                />

                {/* Email & Phone */}
                <FormRow>
                  <StyledInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  <StyledInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                  />
                </FormRow>

                {/* Date & Time */}
                <FormRow>
                  <StyledDateInput
                    label="Preferred Date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={getMinDate()}
                  />
                  <StyledSelect
                    label="Preferred Time"
                    required
                    placeholder="Select time"
                    value={formData.time}
                    onValueChange={handleSelectChange(
                      "time"
                    )}
                    options={timeOptions}
                  />
                </FormRow>

                {/* Guests & Occasion */}
                <FormRow>
                  <StyledSelect
                    label="Number of Guests"
                    required
                    placeholder="Select guests"
                    value={formData.guests}
                    onValueChange={handleSelectChange(
                      "guests"
                    )}
                    options={guestOptions}
                  />
                  <StyledSelect
                    label="Special Occasion"
                    placeholder="Select occasion"
                    value={formData.occasion}
                    onValueChange={handleSelectChange(
                      "occasion"
                    )}
                    options={occasionOptions}
                  />
                </FormRow>

                {/* Special Requests */}
                <StyledTextarea
                  label="Special Requests"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Dietary restrictions, allergies, seating preferences, celebration details..."
                />

                {/* Submit */}
                <div className="pt-4">
                  <GoldButton
                    disabled={isSubmitting}
                    className="w-full justify-center py-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <LoadingSpinner />
                        Processing Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5" />
                        Request Reservation
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </GoldButton>
                </div>

                {/* Footer note */}
                <div className="text-center pt-2">
                  <p className="font-serif text-xs text-muted-foreground">
                    For parties of 8+, please call{" "}
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <MapSection />
    </SectionContainer>
  );
}

// Contact Info Card Component
interface ContactInfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  variants?: object;
}

function ContactInfoCard({
  icon: Icon,
  title,
  children,
  variants,
}: ContactInfoCardProps) {
  return (
    <motion.div
      variants={variants as Variants}
      className="flex gap-4 group"
    >
      <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0 bg-card/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
}

// Social Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 border border-primary/30 flex items-center justify-center bg-card/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
}

// Hours Card Component
interface HoursCardProps {
  hours: Array<{ day: string; hours: string }>;
}

function HoursCard({ hours }: HoursCardProps) {
  return (
    <div className="border border-primary/20 bg-card/30 backdrop-blur-sm p-6 hover:border-primary/40 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 border border-primary/30 flex items-center justify-center bg-primary/5">
          <Clock className="w-4 h-4 text-primary" />
        </div>
        <h3 className="font-display text-lg text-foreground">
          Hours of Operation
        </h3>
      </div>
      <div className="space-y-3">
        {hours.map((schedule) => (
          <div
            key={schedule.day}
            className="flex justify-between text-sm py-1 border-b border-border/30 last:border-0"
          >
            <span className="font-sans text-foreground/90">
              {schedule.day}
            </span>
            <span
              className={`font-serif ${
                schedule.hours === "Closed"
                  ? "text-muted-foreground/50 italic"
                  : "text-muted-foreground"
              }`}
            >
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full inline-block"
    />
  );
}

// Success Message Component
function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="w-20 h-20 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 bg-primary/10"
      >
        <CheckCircle className="w-10 h-10 text-primary" />
      </motion.div>
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-2xl text-foreground mb-3"
      >
        Thank You!
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-serif text-muted-foreground max-w-sm mx-auto leading-relaxed"
      >
        We've received your reservation request and will
        send you a confirmation email within 24 hours.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <DiamondSeparator />
      </motion.div>
    </motion.div>
  );
}

// Map Section Component
function MapSection() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20 md:mt-24"
    >
      <GoldDivider className="mb-12" />
      <div className="relative aspect-21/9 overflow-hidden border border-border group hover:border-primary/30 transition-colors duration-500">
        {/* Map placeholder with pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-card via-secondary to-card" />
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 border border-primary/30 flex items-center justify-center mx-auto mb-4 bg-card/80 backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500"
            >
              <MapPin className="w-7 h-7 text-primary" />
            </motion.div>
            <p className="font-display text-xl md:text-2xl text-foreground mb-1">
              {restaurantInfo.address.neighborhood}
            </p>
            <p className="font-serif text-muted-foreground mb-4">
              {restaurantInfo.address.city},{" "}
              {restaurantInfo.address.state}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-primary/80 tracking-elegant border border-primary/30 px-6 py-2.5 hover:bg-primary/10 transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
