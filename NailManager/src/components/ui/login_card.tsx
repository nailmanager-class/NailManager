import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-md min-h-120">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-card-foreground">Entre na sua conta</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">
          Insira suas credenciais para acessar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-green-800">Email</Label>
              <Input className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-card-foreground placeholder:text-muted-foreground"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-green-800">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <Input className="w-full h-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-card-foreground placeholder:text-muted-foreground" id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full !bg-green-700 !text-white" variant="default">
          Entrar
        </Button>
        <p className="text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <a href="#" className="underline-offset-4 hover:underline">
            Cadastre-se
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
