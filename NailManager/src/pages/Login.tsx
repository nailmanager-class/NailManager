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
import type { LoginFields } from "@/types/Login";
import { useState } from "react";

type LoginCardProps = {
    onSwitchToRegister: () => void;
}

export function LoginCard({ onSwitchToRegister }: LoginCardProps) {
    const [formData, setFormData] = useState<LoginFields>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Dados do login:", formData);
    };
    return (
        <Card className="w-full max-w-md min-h-100 flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground text-center">
                    Entre na sua conta
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-center">
                    Insira suas credenciais para acessar sua conta.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
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
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button
                    type="submit"
                    className="w-full bg-green-700 text-white hover:bg-green-800 cursor-pointer"
                    form="login-form"
                >
                    Entrar
                </Button>
                <p className="text-sm text-muted-foreground">
                    Não tem uma conta?{" "}
                    <button
                        type="button"
                        className="underline-offset-4 hover:underline cursor-pointer"
                        onClick={() => {

                            onSwitchToRegister();
                        }}
                    >
                        Cadastre-se
                    </button>

                </p>

                <p className="text-sm text-muted-foreground">
                    Esqueceu sua senha? {" "}
                    <button
                        type="button"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Clique aqui!
                    </button>
                </p>

            </CardFooter>
        </Card>
    );
}