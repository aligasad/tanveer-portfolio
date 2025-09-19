"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  InstagramIcon,
} from "lucide-react";
import { FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "32c97ef2-48ff-48bd-bb2c-79dac1fc1a99",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("✅ Success:", result);
      form.reset(); // clear form after successful submit
    } else {
      console.error("❌ Error:", result);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E62727 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 relative inline-block font-[family-name:var(--font-heading)]">
            Get In Touch
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next piping design project? Let's connect and
            explore opportunities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        tanveer123alam@email.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9634612657</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-heading)]">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/tanveer-alam-1a631726a">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent cursor-pointer text-accent hover:bg-gradient-to-br hover:from-accent hover:to-primary hover:text-white transition-all shadow-md"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>

                  <a href="https://www.instagram.com/tanveer.alig">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent cursor-pointer text-accent hover:bg-gradient-to-br hover:from-accent hover:to-primary hover:text-white transition-all shadow-md"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </Button>
                  </a>

                  <a href="mailto:tanveer123alam@gmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent cursor-pointer text-accent hover:bg-gradient-to-br hover:from-accent hover:to-primary hover:text-white transition-all shadow-md"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-slide-in-right">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6 font-[family-name:var(--font-heading)]">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:ring-2 focus:ring-accent focus:border-accent rounded-lg"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:ring-2 focus:ring-accent focus:border-accent rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-input border-border focus:ring-2 focus:ring-accent focus:border-accent rounded-lg resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
