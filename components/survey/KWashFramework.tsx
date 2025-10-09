"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {
  Droplets,
  Shield,
  Heart,
  Eye,
  Users,
  CircleCheck as CheckCircle,
  Layers,
  Target,
  Search,
  FileText,
} from "lucide-react";
import PopulationFluxChart from "@/components/charts/population_flux/population_flux_chart";
import Image from "next/image";


export default function KWashFramework() {
  const whyMatters = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Monitoring",
      description:
        "Track WaSH performance and respond to challenges during the event.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Evidence-Based Planning",
      description:
        "Use data-driven insights to guide decisions and improve services.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Culturally Sensitive Design",
      description:
        "Tailored to the spiritual and social context of the Kumbh Mela.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Inclusive & Adaptive",
      description:
        "Supports vulnerable groups across pre-, during-, and post-event phases.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Protocol Gap Solution",
      description:
        "Provides structured guidelines to assess WaSH at mega gatherings.",
    },
  ];

  const whatYouCanDo = [
    {
      icon: <Search className="w-5 h-5" />,
      title:
        "Explore the State of Water, Sanitation, and Hygiene services during Maha Kumbh Mela 2025.",
      description: "",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title:
        "Analyse probable Drivers, Pressures, and Impacts on WaSH services during the Maha Kumbh Mela 2025.",
      description: "",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title:
        "Access potential tools for reporting, mapping, and planning WaSH interventions for mega-religious gathering besides Kumbh Mela.",
      description: "",
    },
  ];

  const coreAreas = [
    {
      title: "Water",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      aspects: ["Availability", "Access", "Quality", "Quantity", "Safety"],
      description: "Comprehensive water service provision and management",
    },
    {
      title: "Sanitation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      aspects: [
        "Facility Access",
        "Functionality",
        "Safety/Privacy",
        "Waste Disposal",
        "Environmental Sanitation",
      ],
      description: "Safe and dignified sanitation infrastructure and services",
    },
    {
      title: "Hygiene",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      aspects: [
        "Health",
        "Menstrual Hygiene",
        "Disease Control",
        "Awareness",
        "Environmental Hygiene",
      ],
      description: "Promoting healthy practices and behavioral change",
    },
  ];

  return (
    <div className="space-y-8">

      <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border-0 rounded-xl shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold leading-tight">
            About K-WaSH
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed opacity-95">
            K-WaSH (Water, Sanitation, and Hygiene for Kumbh) is a strategic framework developed to support the effective planning, monitoring,
            and management of WaSH services at the Kumbh Mela. Infrastructure alone is not enough. The K-WaSH framework offers a comprehensive,
            indicator-based system that helps stakeholders assess the State, identify Pressures, and understand the Impacts of WaSH services in
            real time as well as over periodic time.
          </p>
        </CardContent>
      </Card>

      {/* Why K-WaSH Matters */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">Why K-WaSH Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {whyMatters.map((item, index) => (
            <Card
              key={index}
              tabIndex={0}
              className="group rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20"
            >
              <CardHeader className="pb-3 flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm transform transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-base font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* What You Can Do */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          What You Can Do with the K-WaSH Framework here:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatYouCanDo.map((item, index) => (
            <Card
              key={index}
              tabIndex={0}
              className="group rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/20 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-sm transform transition-transform duration-200 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </div>
              </CardHeader>

            </Card>
          ))}
        </div>
      </div>

      {/* Introducing the K-WaSH Framework */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          Introducing the K-WaSH Framework: Addressing Water, Sanitation, and
          Hygiene at the Kumbh Mela
        </h2>
        <Card tabIndex={0} className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20">
          <CardHeader>
            <CardDescription className="text-lg leading-relaxed">
              The K-WaSH framework has been developed to systematically assess and ensure the adequacy of WaSH services during the Kumbh Mela.
              The following delivery of services are important to maintain Water, Sanitation, and Hygiene at the Kumbh Mela:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="water">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Water</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-base leading-relaxed">
                    <li>
                      <span className="font-medium">
                        Availability & Proximity:
                      </span>{" "}
                      Drinking water should be accessible within 20 minutes or 500 meters.
                    </li>
                    <li>
                      <span className="font-medium">
                        Equitable & Affordable Access:
                      </span>{" "}
                      All individuals should access safe water within 10 minutes, regardless of socioeconomic status.
                    </li>
                    <li>
                      <span className="font-medium">
                        Quality & Acceptability:
                      </span>{" "}
                      Water must be potable, contaminant-free, and culturally acceptable.
                    </li>
                    <li>
                      <span className="font-medium">
                        Quantity & Continuity:
                      </span>{" "}
                      Adequate water must be reliably available for all uses.
                    </li>
                    <li>
                      <span className="font-medium">Safety:</span> Water systems must not pose health risks.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sanitation">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-sm">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Sanitation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-base leading-relaxed">
                    <li>
                      <span className="font-medium">
                        Equitable & Affordable Facility Access:
                      </span>{" "}
                      Facilities should serve at least 1 per 50 people.
                    </li>
                    <li>
                      <span className="font-medium">
                        Accessibility & Functionality:
                      </span>{" "}
                      Facilities must be inclusive and within 100 meters.
                    </li>
                    <li>
                      <span className="font-medium">
                        Safety, Privacy & Dignity:
                      </span>{" "}
                      Facilities must uphold hygiene and human dignity.
                    </li>
                    <li>
                      <span className="font-medium">Safe Waste Disposal:</span>{" "}
                      Biomedical and solid waste must be scientifically managed.
                    </li>
                    <li>
                      <span className="font-medium">
                        Environmental Sanitation:
                      </span>{" "}
                      The site must be clean and free from hazardous waste.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="hygiene">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-sm">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">Hygiene</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-base leading-relaxed">
                    <li>
                      <span className="font-medium">Health Hygiene:</span>{" "}
                      Access to safe water, sanitation, and shelter for well-being.
                    </li>
                    <li>
                      <span className="font-medium">Menstrual Hygiene:</span>{" "}
                      Provision of products and private facilities for women.
                    </li>
                    <li>
                      <span className="font-medium">Disease Control:</span>{" "}
                      Measures to prevent vector-borne and communicable diseases.
                    </li>
                    <li>
                      <span className="font-medium">
                        Awareness & Promotion:
                      </span>{" "}
                      Promotion of hygiene practices among visitors.
                    </li>
                    <li>
                      <span className="font-medium">
                        Environmental Hygiene:
                      </span>{" "}
                      Clean, litter-free, and pathogen-free surroundings.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Indicators: State of WaSH Services */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          Indicators of the State of WaSH Services
        </h2>
        <Card tabIndex={0} className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20">
          <CardHeader>
            <CardDescription className="text-lg leading-relaxed">
              In the K-WaSH framework, the State refers to the current condition or status of WaSH services at the Kumbh Mela site. It captures how
              well water, sanitation, and hygiene services are functioning and being accessed by the floating population, based on a set of
              measurable indicators.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-base leading-relaxed">
                <span className="font-semibold">
                  What Does &quot;State&quot; Mean in K-WaSH?
                </span>
                <br />
                The State represents the observable reality of WaSH service
                delivery at any given time. It helps answer questions like:
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  Are WaSH services equitable and accessible to all pilgrims?
                </li>
                <li>Is the infrastructure functional, safe, and sufficient?</li>
                <li>
                  Are hygiene practices being adopted and promoted effectively?
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold">
                Key Indicators to evaluate the State of WaSH Services
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  Equitable Service Accessibility: Measures access to clean and
                  safe WaSH services across different social groups (gender,
                  caste, income, ability).
                </li>
                <li>
                  Infrastructure & Technology: Assesses the availability and
                  quality of WaSH infrastructure (toilets, water points,
                  handwashing stations) and supporting systems (electricity,
                  transport).
                </li>
                <li>
                  Operations, Management & Risk Aversion: Evaluates how well
                  WaSH services are managed, maintained, and protected from
                  health risks.
                </li>
                <li>
                  Psychosocial Dimensions: Captures how knowledge, awareness,
                  satisfaction, and cultural norms influence the use and
                  perception of WaSH services.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold">Why It Matters</p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>Understanding the State helps stakeholders:</li>
                <li>Monitor service performance in real time.</li>
                <li>Identify gaps and areas needing urgent attention.</li>
                <li>Plan improvements for future events.</li>
                <li>Ensure inclusive and dignified access to WaSH for all.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drivers */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          Indicators of Drivers of WaSH services in Maha Kumbh Mela
        </h2>
        <Card tabIndex={0} className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20">
          <CardHeader>
            <CardDescription className="text-lg leading-relaxed">
              In the K-WaSH framework, Drivers refer to the underlying human
              behaviours, decisions, and systemic factors that influence the
              delivery and effectiveness of WaSH services at the Kumbh Mela. We
              have categorised the Drivers into the following three key domains:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <span className="font-medium">Psychosocial Drivers:</span> These
                include the knowledge, awareness, beliefs, and behaviours of
                both the floating population and service providers. For example,
                pilgrims’ understanding of hygiene practices.
              </li>
              <li>
                <span className="font-medium">
                  Institutional & Governance Drivers:
                </span>{" "}
                These refer to the policies, protocols, leadership decisions,
                and organizational structures that shape WaSH service delivery.
                For example, alignment with national missions like Swachh
                Bharat.
              </li>
              <li>
                <span className="font-medium">
                  Infrastructure & Technology Drivers:
                </span>{" "}
                These involve the availability, accessibility, and innovation of
                WaSH-related infrastructure and tools. For example, use of smart
                technologies to provide clean water such as through Water ATMs.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Impacts */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          Identifying Potential Impacts of WaSH services at Kumbh Mela
        </h2>
        <Card className="rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:ring-1 hover:ring-primary/20">
          <CardHeader>
            <CardDescription className="text-lg leading-relaxed">
              In the K-WaSH framework, Impact refers to the consequences or
              outcomes that result from the condition of WaSH services and the
              pressures placed on them at the Kumbh Mela Site. Impacts are the
              observable effects on people, the environment, public health, and
              the economy when WaSH services are inadequate, mismanaged, or
              overwhelmed. They help us understand why WaSH matters, and what is
              at stake when services fail or succeed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-base font-semibold">
                Types of Impacts in K-WaSH
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  Environmental Impacts: For example, pollution of rivers and
                  water sources due to untreated sewage and ritual waste.
                </li>
                <li>
                  Economic Impacts: For example, emergency expenditures for
                  cleanup and outbreak control.
                </li>
                <li>
                  Health Impacts: For example, outbreaks of waterborne and
                  hygiene-related diseases.
                </li>
                <li>
                  Social and Human Impacts: For example, disproportionate risks
                  to women and vulnerable groups.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold">
                Why Impact Matters in K-WaSH
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  By identifying and analysing impacts through the framework,
                  stakeholders can:
                </li>
                <li>
                  Highlights the real-world consequences of WaSH service gaps.
                </li>
                <li>
                  Supports evidence-based decision-making for future planning.
                </li>
                <li>Encourages inclusive and equitable interventions.</li>
                <li>
                  Reinforces the need for culturally sensitive and sustainable
                  WaSH strategies.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pressures */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          What are the Potential Pressures of WaSH services in Kumbh Mela{" "}
        </h2>
        <Card tabIndex={0} className="rounded-xl hover:shadow-xl transition-all duration-200 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20">
          <CardHeader>
            <CardDescription className="text-lg leading-relaxed">
              In the K-WaSH framework, Pressure refers to the immediate stresses
              or strains placed on the WaSH system because of human activities
              and decisions (Drivers). Pressure indicates how and why the WaSH
              system starts to falter or become overwhelmed, even before the
              full impacts are visible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-base font-semibold">
                What Constitutes Pressure in K-WaSH?
              </p>
              <p className="text-sm text-muted-foreground">
                We have categorised Pressures into five thematic categories:
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>
                  Operational and Management Pressures: Example; sudden shifts
                  in crowd movement or emergency protocols that disrupt WaSH
                  logistics.
                </li>
                <li>
                  Behavioural and Cultural Pressures: Example; reluctance to use
                  sanitation facilities due to cultural beliefs.
                </li>
                <li>
                  Financial and Economic Pressures: Example; budget overruns due
                  to emergency responses or post-event cleanups.
                </li>
                <li>
                  Infrastructure and Service Gaps: Example; inadequate facility
                  planning due to poor population estimates.
                </li>
                <li>
                  Information and Data Pressures: Example; inadequate signage or
                  digital tools to help pilgrims locate facilities; or
                  fragmented data systems that hinder coordinated WaSH
                  responses.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold">
                Why Pressure Matters in K-WaSH
              </p>
              <ul className="list-disc pl-6 text-base text-muted-foreground space-y-2 leading-relaxed">
                <li>Understanding pressures allows stakeholders to:</li>
                <li>
                  Trace the causal link between human behaviour and system
                  stress.
                </li>
                <li>
                  Respond proactively before pressures escalate into full-blown
                  impacts.
                </li>
                <li>
                  Design targeted interventions to relieve stress on WaSH
                  services.
                </li>
                <li>
                  Improve resilience and adaptability of WaSH systems during
                  mass gatherings.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* DPSIR Diagram Text (verbatim) */}
   
      <h2 className="text-4xl font-extrabold text-center tracking-tight mb-6 leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        DPSIR Framework: Understanding the WaSH Cycle
      </h2>
      
      {/* Visual Component: DPSIR Image */}
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src="/indicators/dpsir.png"
          alt="DPSIR Diagram showing the flow from Drivers to Pressures, State, Impact, and Response"
          width={1200}
          height={600}
          className="w-full rounded-xl shadow-2xl border-4 border-indigo-200/50 dark:border-indigo-900/50"
        />
      </div>


      <PopulationFluxChart/>
    </div>
  
  );
}
