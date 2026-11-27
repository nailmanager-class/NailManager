import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import type { RegisterFields } from "@/types/Register";

interface RegisterCardProps {
    onSwitchToLogin: () => void;
}

export function RegisterCard({ onSwitchToLogin }: RegisterCardProps) {
    const [formData, setFormData] = useState<RegisterFields>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Senhas não conferem!");
            return;
        }

        console.log("Registrando:", formData);
        alert("Cadastro realizado!");
    };

    return (
        <Card className="w-full max-w-md min-h-100 flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground text-center">
                    Cadastre-se
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form id="register-form" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-green-800">
                                Nome
                            </Label>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-green-800">
                                Email
                            </Label>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-green-800">
                                    Senha
                                </Label>
                            </div>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="confirmPassword" className="text-green-800">
                                    Confirmar senha:
                                </Label>
                            </div>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button
                    type="submit"
                    form="register-form"
                    className="w-full bg-green-700 text-white hover:bg-green-800 cursor-pointer"
                >
                    Cadastrar
                </Button>
                <p className="text-sm text-muted-foreground">
                    Já tem uma conta?{" "}
                    <button
                        type="button"

                        className="underline-offset-4 hover:underline cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            onSwitchToLogin();
                        }}
                    >
                        Login
                    </button>
                </p>
            </CardFooter>
        </Card>
    );
}
