"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ReactNode, useState } from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  bgColor: string;
  hoverColor?: string;
  children: ReactNode;
}

function SocialButton({
  href,
  label,
  bgColor,
  hoverColor,
  children,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-lg p-2 transition-transform duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: bgColor,
        color: "white",
        transition: "box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 20px ${hoverColor || bgColor}`)
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {children}
    </a>
  );
}

const sharedInputStyles =
  "w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-[var(--accent-cyan)]/80 outline-none text-white placeholder-gray-400 transition-all duration-200";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(data.error || "Failed to send message");
    }
  };

  return (
    <section className="pt-20 pb-40 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Contact Info */}
      <div className="text-center md:text-left space-y-6 flex flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-4xl font-mono font-bold special-text w-fit">
          Contact Me
        </h1>
        <p className="text-lg max-w-md">
          Interested in collaborating, hiring, or discussing a project? I&apos;m
          always open to new opportunities and meaningful conversations.
        </p>

        {/* Social buttons */}
        <div className="flex gap-4">
          <SocialButton
            href="https://github.com/zilfaan"
            label="GitHub"
            bgColor="#7950F2"
          >
            <FaGithub className="text-xl" />
          </SocialButton>
          <SocialButton
            href="https://www.linkedin.com/in/zilfaan-sulfikhan-9358b6303/"
            label="LinkedIn"
            bgColor="#0A66C2"
          >
            <FaLinkedin className="text-xl" />
          </SocialButton>
          <SocialButton
            href="mailto:zilfaanzaki@example.com"
            label="Email"
            bgColor="#da202a"
          >
            <HiOutlineMail className="text-xl" />
          </SocialButton>
        </div>
      </div>

      {/* Contact me form */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className={sharedInputStyles}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={sharedInputStyles}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className={`${sharedInputStyles} resize-none`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <div className="flex justify-between items-center">
          <span
            className={
              "text-sm " +
              (status === "Message sent!" ? "text-green-400" : "text-red-500")
            }
          >
            {status}
          </span>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-md font-mono font-semibold transition-transform duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-cyan), var(--accent-magenta))",
              color: "var(--background)",
              boxShadow: "0 5px 15px rgba(0,255,245,0.3)",
            }}
          >
            ./send-message.sh
          </button>
        </div>
      </form>
    </section>
  );
}
