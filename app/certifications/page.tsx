import Link from "next/link";
import Image from "next/image";
import { Award, ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import certificationsData from "@/data/certifications-data";

export const metadata = {
  title: "Certifications & Training",
  description:
    "A collection of certifications, technical training, and applied learning across cloud, software, AI, and automation.",
};

const placeholderInsights = [
  "Add the strongest technical concept, framework, or platform insight you gained.",
  "Add the most useful hands-on tool, lab, workflow, or implementation takeaway.",
  "Add how this certification or training improved your engineering decisions or delivery.",
];

export default function CertificationsPage() {
  const { certifications } = certificationsData;

  return (
    <div className="container py-12">
      <div>
        <h1 className="mb-4 text-4xl font-bold">Certifications & Training</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A collection of certifications, technical training, and applied
          learning across cloud, software, AI, and automation.
        </p>
      </div>

      {certifications.length === 0 ? (
        <Card className="border-zinc-800/50 bg-zinc-900/50">
          <CardContent className="p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full border border-primary/20 bg-primary/10 p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="mb-2 text-xl font-semibold">
              No certifications or training entries added yet
            </h2>
            <p className="text-zinc-400">
              Add entries in <code>data/certifications-data.ts</code> to
              showcase certifications, training, and key learnings here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => {
            const insights =
              certification.insights && certification.insights.length > 0
                ? certification.insights.slice(0, 3)
                : placeholderInsights;

            return (
              <Card
                key={certification.id}
                className="flex flex-col overflow-hidden border-zinc-800/50 bg-zinc-900/50"
              >
                <div className="aspect-video w-full overflow-hidden bg-zinc-900">
                  {certification.image ? (
                    <Image
                      src={certification.image}
                      alt={certification.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PlaceholderImage
                      type="generic"
                      title={certification.title}
                      className="h-full w-full"
                    />
                  )}
                </div>
                <CardContent className="flex flex-grow flex-col p-6">
                  <h2 className="mb-2 text-xl font-bold">
                    {certification.title}
                  </h2>
                  <p className="mb-2 text-zinc-400">
                    {certification.issuer} | {certification.year}
                  </p>
                  <p className="mb-4 text-zinc-400">
                    {certification.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {certification.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-5 rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-4">
                    <p className="mb-3 text-sm font-medium text-zinc-100">
                      Key Learnings
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      {insights.map((insight) => (
                        <li key={insight} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex gap-2">
                    {certification.credentialUrl && (
                      <Link
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-white text-black hover:bg-zinc-200"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Credential
                        </Button>
                      </Link>
                    )}
                    {certification.projectUrl && (
                      <Link
                        href={certification.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-white/20 hover:bg-white/10"
                        >
                          <FolderOpen className="mr-2 h-4 w-4" />
                          {certification.projectLabel || "Project"}
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
