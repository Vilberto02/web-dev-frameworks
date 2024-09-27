import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "../RegisterForm";
import { LoginForm } from "../LoginForm";

export function TabsForms() {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sin Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          {/* <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2">
            <LoginForm></LoginForm>
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          {/* <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2">
            <RegisterForm></RegisterForm>
          </CardContent>
          {/* <CardFooter>
            <Button>Save password</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  );
}
