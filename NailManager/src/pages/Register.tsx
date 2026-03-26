import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

interface RegisterCardProps {
    onSwitchToLogin: () => void;
}

export function RegisterCard({onSwitchToLogin}: RegisterCardProps) {
    return (
        // AQUI: Adicionado 'flex-col'
        <Card className="w-full max-w-md min-h-100 flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground text-center">
                    Cadastre-se
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form>
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
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-green-800">
                                    Password
                                </Label>
                            </div>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="password"
                                type="password"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="confirm_password" className="text-green-800">
                                    Confirm Password:
                                </Label>
                            </div>
                            <Input
                                className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2
                           focus:ring-primary focus:border-transparent transition-all text-card-foreground
                           placeholder:text-muted-foreground"
                                id="confirm_password"
                                type="password"
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
                >
                    Cadastrar
                </Button>
                <p className="text-sm text-muted-foreground">
                    Já tem uma conta?{" "}
                    <a href="#" className="underline-offset-4 hover:underline" onClick={(e) => {
                        e.preventDefault();
                        onSwitchToLogin();
                    }}>
                        Login
                    </a>
                </p>
            </CardFooter>
        </Card>
    );
}
