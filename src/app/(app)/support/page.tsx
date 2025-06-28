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
                    <Button variant="outline" className="w-full justify-start h-14 text-left">
                        <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold">Call Us</p>
                                <p className="text-muted-foreground font-normal">+94 11 234 5678</p>
                            </div>
                        </div>
                    </Button>
                     <Button variant="outline" className="w-full justify-start h-14 text-left">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold">Email Us</p>
                                <p className="text-muted-foreground font-normal">support@fixmate.lk</p>
                            </div>
                        </div>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Our FAQ section is coming soon!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
