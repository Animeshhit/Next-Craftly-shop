"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

export default function CouponPopup() {
  const pathName = usePathname();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open the popup automatically after a short delay
    if (pathName != "payment") {
      const timer = setTimeout(() => setOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [pathName]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || phone.trim() === "") {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    // Generate a mock coupon code
    const mockCoupon = `SHOP${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCoupon(mockCoupon);
    toast({
      title: "Success!",
      description: `Your coupon code is: ${mockCoupon}`,
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span className="text-blue-400 text-xs">Get Coupon Code</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get Your Shopping Coupon</DialogTitle>
            <DialogDescription>
              Enter your details to receive a special coupon code for your next
              purchase.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="block">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                placeholder="Enter your name..."
                onChange={(e) => setName(e.target.value)}
                className="col-span-4"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="block">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                placeholder="Enter your phone..."
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-4"
              />
            </div>
            <Button type="submit" className="ml-auto text-xs bg-zinc-700">
              Get Coupon
            </Button>
          </form>
          {coupon && (
            <div className="mt-4 p-4 bg-green-100 rounded-md">
              <p className="text-green-800 font-semibold">Your Coupon Code:</p>
              <p className="text-2xl font-bold text-green-600">{coupon}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
