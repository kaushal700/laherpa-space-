-- Create table for RDP applications
CREATE TABLE public.rdp_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.rdp_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit application (public form)
CREATE POLICY "Anyone can submit RDP application"
  ON public.rdp_applications FOR INSERT
  TO public
  WITH CHECK (true);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_rdp_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_rdp_applications_updated_at
  BEFORE UPDATE ON public.rdp_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_rdp_applications_updated_at();