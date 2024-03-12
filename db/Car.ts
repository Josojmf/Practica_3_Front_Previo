import mongoose from 'npm:mongoose';
type Car = { make: string;
     model: string;
      fuel_type: string;
       drive: string; 
       cylinders: number; 
    };
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(Deno.env.get("MONGO_URL")!);
      }
const CarSchema = new mongoose.Schema<Car>({ make: String, model: String, fuel_type: String, drive: String, cylinders: Number });
export default mongoose.model<Car>("Car", CarSchema);