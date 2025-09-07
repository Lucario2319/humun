// app/contact/page.tsx
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-16 px-6 flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Page Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact <span className="text-purple-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions or need more
            details, reach out using the information below.
          </p>
        </header>

        {/* Address */}
        <section className="space-y-4">
          <div className="flex justify-center items-center gap-2 text-lg text-gray-800 font-semibold">
            <MapPin className="w-6 h-6 text-purple-600" />
            Address
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Block 18, Gulistan-e-Jauhar, University Avenue, Off Shahrah-e-Faisal
            Rd, Faisal Cantonment, Karachi, Karachi City, Sindh
          </p>
        </section>

        {/* Email */}
        <section className="space-y-2">
          <div className="flex justify-center items-center gap-2 text-lg text-gray-800 font-semibold">
            <Mail className="w-6 h-6 text-purple-600" />
            Email
          </div>
          <p className="text-lg text-gray-600">humun@habib.edu.pk</p>
        </section>

        {/* Contact Numbers */}
        <section className="space-y-6">
          <div className="flex justify-center items-center gap-2 text-lg text-gray-800 font-semibold">
            <Phone className="w-6 h-6 text-purple-600" />
            Phone Contacts
          </div>
          <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="font-semibold text-gray-900">Mahrukh Usmani</p>
              <p className="text-gray-600">+92 331 3788550</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="font-semibold text-gray-900">Soha Naveed</p>
              <p className="text-gray-600">+92 311 3788550</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <p className="font-semibold text-gray-900">Ghos Usmani</p>
              <p className="text-gray-600">+92 336 3788550</p>
            </div>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="pt-8">
          <iframe
            title="Habib University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7894618754904!2d67.13500857505798!3d24.90516214346796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33906ead1899d%3A0x3c0681e6f7d5dc14!2sHabib%20University!5e0!3m2!1sen!2s!4v1757273948525!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </section>
      </div>
    </div>
  );
}
