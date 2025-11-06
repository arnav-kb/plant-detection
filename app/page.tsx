"use client"
import { useState, useRef } from "react"
import { Menu, X, Globe, ChevronRight, Upload, BarChart3, Zap, CheckCircle, Users, Award } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

const translations = {
  en: {
    home: "Home",
    predict: "Predict",
    about: "About",
    contact: "Contact",
    revolutionaryAI: "Revolutionary AI Technology",
    smartAgriculture: "Smart Agriculture",
    poweredByAI: "Powered by AI",
    transformFarming:
      "Transform your farming with instant crop disease detection. Our advanced AI provides accurate diagnosis and treatment recommendations in seconds.",
    predictBtn: "Predict",
    cropsAnalyzed: "Crops Analyzed",
    accuracyRate: "Accuracy Rate",
    farmersHelped: "Farmers Helped",
    supportAvailable: "Support Available",
    tryAIDetection: "Try AI Detection",
    liveDemo: "Live Demo",
    uploadCropImageDesc: "Upload crop image for instant analysis",
    uploadCropImage: "Upload Crop Image",
    dragDrop: "Drag & drop or click to select",
    chooseImage: "Choose Image",
    location: "Location",
    useMyLocation: "Use My Location",
    latitude: "Latitude",
    longitude: "Longitude",
    city: "City (optional)",
    analyze: "Analyze",
    analyzing: "Analyzing...",
    clear: "Clear",
    analysisResults: "Analysis Results",
    diseaseDetected: "Disease Detected",
    confidence: "Confidence",
    weather: "Weather at",
    temp: "Temp",
    humidity: "Humidity",
    treatment: "Treatment Recommendations",
    uploadImageToSee: "Upload an image and click Analyze to see results",
    getting: "Getting...",
    copyright: "© 2025 CropCare AI. All rights reserved. Powering sustainable agriculture with AI.",
    whyChoose: "Why Choose CropCare AI",
    cuttingEdgeTech: "Cutting edge technology meets practical farming solutions",
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Get disease diagnosis in under 3 seconds with 99% accuracy using our advanced AI model.",
    precisionDetection: "Precision Detection",
    precisionDetectionDesc: "Advanced crop learning trained on 180,000+ crop images for unmatched accuracy",
    farmerCentric: "Farmer-Centric",
    farmerCentricDesc: "Designed specifically for farmers with simple interfaces and offline capabilities",
    globalImpact: "Global Impact",
    globalImpactDesc: "Supporting sustainable agriculture practices across multiple countries and crop types",
    saveTime: "Save Time",
    saveTimeDesc: "Detect issues in 3 seconds vs 3 days of farming experience",
    increaseYield: "Increase Yield",
    increaseYieldDesc: "Early detection and treatment recommendations increase crop yield significantly",
    expertKnowledge: "Expert Knowledge",
    expertKnowledgeDesc: "Access agricultural expertise 24/7 at your fingertips",
    makeFirst: "Make First",
    makeFirstDesc: "Real results in real time without complex setup",
    testimonials: "Testimonials",
    farmersReview: "What Farmers Say",
    testimonial1:
      "CropCare AI saved my entire crop this season! The detection was incredibly accurate and the treatment recommendations were spot on.",
    testimonial1Author: "Rajesh Kumar",
    testimonial1Role: "Rice Farmer, Punjab",
    testimonial2:
      "This is a game-changer for us. My harvest increased by 40% after using CropCare AI. Highly recommended!",
    testimonial2Author: "Priya Sharma",
    testimonial2Role: "Vegetable Farmer, Maharashtra",
    testimonial3: "Easy to use, reliable, and the 24/7 support is fantastic. The AI's accuracy is remarkable.",
    testimonial3Author: "Mohammed Ali",
    testimonial3Role: "Rice Farmer, West Bengal",
    contactHeading: "Get In Touch With Us",
    contactDesc: "Have questions? Our team is here to help. Fill out the form below and we'll get back to you soon.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    phone: "Phone",
    address: "Address",
    callUs: "Call Us",
    emailUs: "Email Us",
    visitUs: "Visit Us",
    quickLinks: "Quick Links"
  },
  hi: {
    home: "होम",
    predict: "पूर्वानुमान",
    about: "के बारे में",
    contact: "संपर्क",
    revolutionaryAI: "क्रांतिकारी एआई प्रौद्योगिकी",
    smartAgriculture: "स्मार्ट कृषि",
    poweredByAI: "एआई द्वारा संचालित",
    transformFarming:
      "तुरंत फसल की बीमारी का पता लगाने के साथ अपनी खेती को रूपांतरित करें। हमारा उन्नत एआई सेकंड में सटीक निदान और उपचार सिफारिशें प्रदान करता है।",
    predictBtn: "पूर्वानुमान",
    cropsAnalyzed: "फसलें विश्लेषित",
    accuracyRate: "सटीकता दर",
    farmersHelped: "किसान सहायता प्राप्त",
    supportAvailable: "सहायता उपलब्ध",
    tryAIDetection: "एआई पहचान आज़माएं",
    liveDemo: "लाइव डेमो",
    uploadCropImageDesc: "तुरंत विश्लेषण के लिए फसल की छवि अपलोड करें",
    uploadCropImage: "फसल की छवि अपलोड करें",
    dragDrop: "खींचें और छोड़ें या चुनने के लिए क्लिक करें",
    chooseImage: "छवि चुनें",
    location: "स्थान",
    useMyLocation: "मेरा स्थान उपयोग करें",
    latitude: "अक्षांश",
    longitude: "देशांतर",
    city: "शहर (वैकल्पिक)",
    analyze: "विश्लेषण करें",
    analyzing: "विश्लेषण जारी है...",
    clear: "स्पष्ट",
    analysisResults: "विश्लेषण परिणाम",
    diseaseDetected: "रोग का पता चला",
    confidence: "विश्वास",
    weather: "मौसम",
    temp: "तापमान",
    humidity: "आर्द्रता",
    treatment: "उपचार सिफारिशें",
    uploadImageToSee: "परिणाम देखने के लिए एक छवि अपलोड करें और विश्लेषण करें पर क्लिक करें",
    getting: "प्राप्त हो रहा है...",
    copyright: "© 2025 CropCare AI। सर्वाधिकार सुरक्षित। एआई के साथ टिकाऊ कृषि को शक्तिशाली बनाना।",
    whyChoose: "CropCare AI को क्यों चुनें",
    cuttingEdgeTech: "अत्याधुनिक तकनीक व्यावहारिक कृषि समाधान से मिलती है",
    lightningFast: "बिजली की गति से तेज",
    lightningFastDesc: "99% सटीकता के साथ हमारे उन्नत एआई मॉडल का उपयोग करके 3 सेकंड में रोग निदान प्राप्त करें।",
    precisionDetection: "सटीक पहचान",
    precisionDetectionDesc: "180,000+ फसल की छवियों पर प्रशिक्षित उन्नत फसल शिक्षा",
    farmerCentric: "किसान-केंद्रित",
    farmerCentricDesc: "किसानों के लिए विशेष रूप से डिज़ाइन किया गया सरल इंटरफेस",
    globalImpact: "वैश्विक प्रभाव",
    globalImpactDesc: "कई देशों में टिकाऊ कृषि प्रथाओं का समर्थन करना",
    saveTime: "समय बचाएं",
    saveTimeDesc: "3 दिनों के बजाय 3 सेकंड में समस्याओं का पता लगाएं",
    increaseYield: "फसल बढ़ाएं",
    increaseYieldDesc: "शीघ्र पहचान और उपचार सिफारिशें फसल उपज में वृद्धि करते हैं",
    expertKnowledge: "विशेषज्ञ ज्ञान",
    expertKnowledgeDesc: "24/7 कृषि विशेषज्ञता तक पहुंचें",
    makeFirst: "पहले बनाएं",
    makeFirstDesc: "जटिल सेटअप के बिना वास्तविक परिणाम",
    testimonials: "प्रशंसापत्र",
    farmersReview: "किसान क्या कहते हैं",
    testimonial1: "CropCare AI ने इस सीजन में मेरी पूरी फसल बचाई! पहचान बेहद सटीक थी और उपचार सिफारिशें बिल्कुल सही थीं।",
    testimonial1Author: "राजेश कुमार",
    testimonial1Role: "धान किसान, पंजाब",
    testimonial2: "यह हमारे लिए एक गेम-चेंजर है। CropCare AI का उपयोग करने के बाद मेरी फसल 40% बढ़ गई। अत्यधिक अनुशंसित!",
    testimonial2Author: "प्रिया शर्मा",
    testimonial2Role: "सब्जी किसान, महाराष्ट्र",
    testimonial3: "उपयोग में आसान, विश्वसनीय, और 24/7 समर्थन शानदार है। AI की सटीकता उल्लेखनीय है।",
    testimonial3Author: "मोहम्मद अली",
    testimonial3Role: "धान किसान, पश्चिम बंगाल",
    contactHeading: "हमसे संपर्क करें",
    contactDesc: "प्रश्न हैं? हमारी टीम आपकी मदद के लिए यहां है। नीचे दिया गया फॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे।",
    name: "नाम",
    email: "ईमेल",
    subject: "विषय",
    message: "संदेश",
    send: "संदेश भेजें",
    phone: "फोन",
    address: "पता",
    callUs: "हमें कॉल करें",
    emailUs: "हमें ईमेल करें",
    visitUs: "हमारा दौरा करें",
    quickLinks: "त्वरित लिंक",
  },
}

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [location, setLocation] = useState({ latitude: "", longitude: "", city: "" })
  const [gettingLocation, setGettingLocation] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "hi">("en")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const t = (key: string) => {
    const translation = translations[language] as any
    return translation[key] || key
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
      setError(null)
      setResult(null)

      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setError("Please select a valid image file")
    }
  }

  const getLocation = () => {
    setGettingLocation(true)
    setError(null)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toFixed(4),
            longitude: position.coords.longitude.toFixed(4),
            city: "",
          })
          setGettingLocation(false)
        },
        (error) => {
          setError("Unable to get location. Please enter manually.")
          setGettingLocation(false)
        },
      )
    } else {
      setError("Geolocation is not supported by your browser")
      setGettingLocation(false)
    }
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Please select an image")
      return
    }

    if (!location.latitude || !location.longitude) {
      setError("Please provide location (latitude and longitude)")
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    const formData = new FormData()
    formData.append("file", selectedFile)
    formData.append("latitude", location.latitude)
    formData.append("longitude", location.longitude)
    if (location.city) {
      formData.append("city", location.city)
    }

    try {
      const response = await fetch("https://adeshjain-plant-detection.hf.space/predict-with-remedies", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to get prediction")
      }

      const data = await response.json()
      setResult(data)
    } catch (err: any) {
      setError(err.message || "Failed to connect to the server")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSelectedFile(null)
    setPreview(null)
    setResult(null)
    setError(null)
    setLocation({ latitude: "", longitude: "", city: "" })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H9.5V3h1V1.5zM14.5 5.5a1 1 0 11-2 0 1 1 0 012 0zM4 6a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg">CropCare</span>
                <span className="text-xs text-emerald-400">AI</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">
                {t("home")}
              </a>
              <a href="#predict" className="text-gray-300 hover:text-white transition">
                {t("predict")}
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition">
                {t("about")}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">
                {t("contact")}
              </a>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition">
                <Globe className="w-5 h-5 text-gray-400" />
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "hi")}
                className="bg-slate-800 text-white px-3 py-1 rounded-lg text-sm hover:bg-slate-700 transition"
              >
                <option value="en">EN</option>
                <option value="hi">HI</option>
              </select>
              <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              <a href="#home" className="block text-gray-300 hover:text-white py-2">
                {t("home")}
              </a>
              <a href="#predict" className="block text-gray-300 hover:text-white py-2">
                {t("predict")}
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white py-2">
                {t("about")}
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white py-2">
                {t("contact")}
              </a>
              <div className="pt-2 border-t border-slate-700">
                <label className="text-xs text-gray-400 block mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as "en" | "hi")}
                  className="w-full bg-slate-800 text-white px-3 py-2 rounded-lg text-sm hover:bg-slate-700 transition"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
              {t("revolutionaryAI")}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="text-emerald-400">{t("smartAgriculture")}</span>
            <br />
            <span className="text-emerald-300">{t("poweredByAI")}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">{t("transformFarming")}</p>
          <a
            href="#predict"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            {t("predictBtn")} <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { value: "50K+", label: t("cropsAnalyzed") },
            { value: "95%", label: t("accuracyRate") },
            { value: "10K+", label: t("farmersHelped") },
            { value: "24/7", label: t("supportAvailable") },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 text-center hover:border-emerald-400/30 transition"
            >
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="predict" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
            {t("tryAIDetection")}
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-3">{t("liveDemo")}</h2>
          <p className="text-gray-400">{t("uploadCropImageDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Area */}
          <div className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center hover:border-emerald-400/50 transition">
            <Upload className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t("uploadCropImage")}</h3>
            <p className="text-gray-400 text-sm mb-6">{t("dragDrop")}</p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition mb-6"
            >
              {t("chooseImage")}
            </button>

            {preview && (
              <div className="w-full mt-6">
                <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-48 rounded-lg mx-auto" />
              </div>
            )}

            {/* Location Section */}
            <div className="w-full mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-white">{t("location")}</label>
                <button
                  type="button"
                  onClick={getLocation}
                  disabled={gettingLocation}
                  className="text-xs px-3 py-1 rounded-full bg-slate-700 hover:bg-slate-600 text-gray-300 transition disabled:opacity-50"
                >
                  {gettingLocation ? t("getting") : t("useMyLocation")}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  step="0.0001"
                  placeholder={t("latitude")}
                  value={location.latitude}
                  onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
                  className="px-3 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="number"
                  step="0.0001"
                  placeholder={t("longitude")}
                  value={location.longitude}
                  onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
                  className="px-3 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <input
                type="text"
                placeholder={t("city")}
                value={location.city}
                onChange={(e) => setLocation({ ...location, city: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            {error && (
              <div className="mt-6 w-full p-3 text-sm bg-red-500/20 text-red-300 rounded-lg border border-red-500/30">
                {error}
              </div>
            )}

            <div className="flex gap-3 w-full mt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !selectedFile}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition disabled:cursor-not-allowed"
              >
                {loading ? t("analyzing") : t("analyze")}
              </button>
              {selectedFile && (
                <button
                  type="button"
                  onClick={reset}
                  className="px-4 py-3 rounded-lg border border-slate-600 text-gray-300 hover:border-slate-500 transition"
                >
                  {t("clear")}
                </button>
              )}
            </div>
          </div>

          {/* Results Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">{t("analysisResults")}</h3>
            </div>

            {result ? (
              <div className="space-y-6">
                {/* Disease Detection */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">{t("diseaseDetected")}</p>
                  <p
                    className={`text-lg font-semibold ${result.prediction.is_healthy ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {result.prediction.disease.replace(/_/g, " ")}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {t("confidence")}: {(result.prediction.confidence * 100).toFixed(2)}%
                  </p>
                </div>

                {/* Weather Info */}
                {result.weather && (
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-white mb-3">
                      {t("weather")} {result.location.name}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">{t("temp")}: </span>
                        <span className="text-white font-medium">{result.weather.temperature}°C</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{t("humidity")}: </span>
                        <span className="text-white font-medium">{result.weather.humidity}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Treatment */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-white mb-3">{t("treatment")}</p>
                  <div className="text-xs text-gray-300 max-h-48 overflow-y-auto prose prose-invert prose-sm">
                    <ReactMarkdown
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1 className="text-white font-bold text-base mb-2 mt-2" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2 className="text-white font-bold text-sm mb-2 mt-2" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3 className="text-white font-semibold text-xs mb-1 mt-1" {...props} />
                        ),
                        p: ({ node, ...props }) => <p className="text-gray-300 mb-2" {...props} />,
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc list-inside mb-2 text-gray-300 space-y-1" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="list-decimal list-inside mb-2 text-gray-300 space-y-1" {...props} />
                        ),
                        li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                        strong: ({ node, ...props }) => (
                          <strong className="text-emerald-400 font-semibold" {...props} />
                        ),
                        code: ({ node, ...props }) => (
                          <code className="bg-slate-600 px-1 py-0.5 rounded text-gray-200" {...props} />
                        ),
                      }}
                    >
                      {result.treatment.remedies}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <BarChart3 className="w-16 h-16 text-slate-600 mb-4" />
                <p className="text-gray-500">{t("uploadImageToSee")}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
            Advanced Features
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-3">{t("whyChoose")}</h2>
          <p className="text-gray-400">{t("cuttingEdgeTech")}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Zap, title: t("lightningFast"), desc: t("lightningFastDesc") },
            { icon: CheckCircle, title: t("precisionDetection"), desc: t("precisionDetectionDesc") },
            { icon: Users, title: t("farmerCentric"), desc: t("farmerCentricDesc") },
            { icon: Award, title: t("globalImpact"), desc: t("globalImpactDesc") },
          ].map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-emerald-400/30 transition"
              >
                <IconComponent className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Benefits */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">How CropCare AI Helps</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: t("saveTime"), desc: t("saveTimeDesc") },
              { title: t("increaseYield"), desc: t("increaseYieldDesc") },
              { title: t("expertKnowledge"), desc: t("expertKnowledgeDesc") },
              { title: t("makeFirst"), desc: t("makeFirstDesc") },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">{t("farmersReview")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: t("testimonial1"), author: t("testimonial1Author"), role: t("testimonial1Role") },
              { text: t("testimonial2"), author: t("testimonial2Author"), role: t("testimonial2Role") },
              { text: t("testimonial3"), author: t("testimonial3Author"), role: t("testimonial3Role") },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">{t("contactHeading")}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("contactDesc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t("name")}
                  className="px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="email"
                  placeholder={t("email")}
                  className="px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <input
                type="text"
                placeholder={t("subject")}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
              <textarea
                placeholder={t("message")}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition"
              >
                {t("send")}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">{t("callUs")}</h4>
              <p className="text-gray-400">+91 9730030114</p>
              <p className="text-gray-500 text-sm">Available 24/7</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">{t("emailUs")}</h4>
              <p className="text-gray-400">seerbharat@gamil.com</p>
              <p className="text-gray-500 text-sm">We respond within 24 hours</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">{t("visitUs")}</h4>
              <p className="text-gray-400">103 snehagan residency, Wakad</p>
              <p className="text-gray-500 text-sm"> Pune , India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  )
}