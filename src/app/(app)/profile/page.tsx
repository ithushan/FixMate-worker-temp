import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { workerProfile } from "@/lib/mock-data";
import { Edit, Mail, MapPin, Phone, Star, Wrench } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={workerProfile.profilePhotoUrl} alt={workerProfile.name} />
            <AvatarFallback>{workerProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold font-headline">{workerProfile.name}</h1>
          <div className="flex items-center gap-1 text-accent">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-bold text-lg">4.8</span>
              <span className="text-sm text-muted-foreground">(12 Reviews)</span>
          </div>
          <Button variant="outline" className="mt-4">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </CardContent>
      </Card>
      
      <Card>
          <CardHeader>
              <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
              <p className="text-muted-foreground">{workerProfile.bio}</p>
          </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-muted-foreground" />
                <span>Primary Skill: <strong>{workerProfile.skill}</strong></span>
            </div>
            <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Service Area: <strong>{workerProfile.serviceArea}</strong></span>
            </div>
             <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>{workerProfile.email}</span>
            </div>
             <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>{workerProfile.phone}</span>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Work Photo Gallery</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {workerProfile.workPhotos.map((photo, index) => (
                    <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                        <Image src={photo} alt={`Work photo ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint="construction work" />
                    </div>
                ))}
            </div>
            <Button variant="secondary" className="mt-4 w-full"><Edit className="mr-2 h-4 w-4" /> Manage Photos</Button>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full">Logout</Button>
    </div>
  );
}
