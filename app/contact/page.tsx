import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import resumeData from "@/data/resume-data"

export const metadata = {
  title: "Contact",
  description: `Get in touch with Giovani Moutinho for opportunities, collaborations, or just to say hello.`,
}

export default function ContactPage() {
  // Ensure we have the personal info data with fallbacks
  const email = resumeData?.personalInfo?.email || "contact@mgiovani.com"
  const location = resumeData?.personalInfo?.location || "Brazil"
  const github = resumeData?.personalInfo?.github || "github.com/mgiovani"
  const linkedin = resumeData?.personalInfo?.linkedin || "linkedin.com/in/mgiovani"

  return (
    <div className="container py-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Get in touch for opportunities, collaborations, or just to say hello
        </p>
      </div>

      <div className="space-y-6">
        <Card className="bg-zinc-900/50 border-zinc-800/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${email}`} className="text-zinc-400 hover:text-white">
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-0.5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-400">{location}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-800/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href={github.startsWith("http") ? github : `https://${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
              <Link
                href={linkedin.startsWith("http") ? linkedin : `https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-md px-4 py-2 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
