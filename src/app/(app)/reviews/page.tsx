import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { reviews } from '@/lib/mock-data';
import { Star, MessageSquare } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} />
            ))}
        </div>
    );
}

export default function ReviewsPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Your Reviews</h1>
        <p className="text-muted-foreground">See what customers are saying about your work</p>
      </div>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map(review => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{review.jobTitle}</CardTitle>
                    <StarRating rating={review.rating} />
                </div>
                <CardDescription>From: {review.customerName} on {review.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">&quot;{review.comment}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">You have no reviews yet.</p>
        </div>
      )}
    </div>
  );
}
