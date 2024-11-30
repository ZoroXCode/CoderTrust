"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Import Alert components
import Animation from "@/components/animation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    framework: "",
    message: "",
  });
  const [result, setResult] = useState(""); // State for showing result message
  const [alertType, setAlertType] = useState(""); // To store the alert type (success or error)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setResult("Sending....");
    setAlertType("info");

    const formPayload = {
      name: formData.name,
      email: formData.email,
      framework: formData.framework,
      message: formData.message,
    };

    const formDataToSend = new FormData();
    for (const key in formPayload) {
      formDataToSend.append(key, formPayload[key]);
    }
    formDataToSend.append("access_key", "b356b3b3-d5d9-494b-a082-a6420a2acbc3"); // Your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setAlertType("success");
        setResult("Form Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          framework: "",
          message: "",
        });
      } else {
        setAlertType("error");
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setAlertType("error");
      setResult("Error sending data. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <Animation>
      <section className="h-screen flex items-center justify-center px-4 py-10">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Send us a message and we'll get back to you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* Name Field */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </div>

                {/* Framework Select */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select
                    id="framework"
                    value={formData.framework}
                    onValueChange={(value) =>
                      setFormData({ ...formData, framework: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col space-y-1.5 h-32">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="resize-none pt-2"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Leave a message"
                    rows={5}
                    cols={50}
                    required
                  />
                </div>

                {/* Alert Message */}
                {result && (
                  <div className="mt-4">
                    <Alert variant={alertType}>
                      <AlertTitle>
                        {alertType === "success" ? "Success" : "Error"}
                      </AlertTitle>
                      <AlertDescription>{result}</AlertDescription>
                    </Alert>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <CardFooter className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() =>
                    setFormData({
                      name: "",
                      email: "",
                      framework: "",
                      message: "",
                    })
                  }
                >
                  Cancel
                </Button>
                <Button type="submit">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="sm"
                    className="text-white"
                  />
                  Submit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
    </Animation>
  );
}
