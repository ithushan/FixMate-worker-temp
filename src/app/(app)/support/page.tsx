import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Mail, Phone } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="p-4 space-y-6">
            <div className="text-center">
                <LifeBuoy className="mx-auto h-12 w-12 text-primary" />
                <h1 className="text-3xl font-bold font-headline mt-4">Support & Help</h1>
                <p className="text-muted-foreground">We&apos;re here to help you</p>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>If you have any issues or questions, please reach out.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start h-14 text-left gap-4" asChild>
                        <a href="tel:+94112345678">
                            <Phone className="h-6 w-6 text-primary" />
                            <div className="text-left">
                                <p className="font-semibold">Call Us</p>
                                <p className="text-muted-foreground font-normal">+94 11 234 5678</p>
                            </div>
                        </a>
                    </Button>
                     <Button variant="outline" className="w-full justify-start h-14 text-left gap-4" asChild>
                        <a href="mailto:support@fixmate.lk">
                            <Mail className="h-6 w-6 text-primary" />
                            <div className="text-left">
                                <p className="font-semibold">Email Us</p>
                                <p className="text-muted-foreground font-normal">support@fixmate.lk</p>
                            </div>
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How do I change my listed skill?</AccordionTrigger>
                            <AccordionContent>
                                To change your primary skill, please contact support. We need to verify your qualifications for the new skill you want to add.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How are payments handled?</AccordionTrigger>
                            <AccordionContent>
                                Customers pay through the app. Once a job is marked as complete and confirmed by the customer, the payment is processed and transferred to your account within 2-3 business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What if I need to cancel a confirmed job?</AccordionTrigger>
                            <AccordionContent>
                                You can cancel a job from the job details page. Please do so as early as possible. Frequent cancellations may affect your rating and visibility on the platform.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How do I update my service area?</AccordionTrigger>
                            <AccordionContent>
                                You can update your service area in your profile settings. Navigate to the Profile tab, tap &apos;Edit Profile&apos;, and update your service area details.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}
