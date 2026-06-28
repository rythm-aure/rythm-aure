export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      announcements: {
        Row: {
          body: string | null
          created_at: string
          id: string
          is_active: boolean
          published_at: string
          title: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          published_at?: string
          title: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          published_at?: string
          title?: string
        }
        Relationships: []
      }
      availability_blocks: {
        Row: {
          blocked_date: string
          created_at: string
          id: string
          reason: string | null
        }
        Insert: {
          blocked_date: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Update: {
          blocked_date?: string
          created_at?: string
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      choreography_bookings: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string
          event_date: string
          event_location: string | null
          event_type: string | null
          guests: number | null
          id: string
          message: string | null
          name: string
          phone: string | null
          status: Database["public"]["Enums"]["booking_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email: string
          event_date: string
          event_location?: string | null
          event_type?: string | null
          guests?: number | null
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string
          event_date?: string
          event_location?: string | null
          event_type?: string | null
          guests?: number | null
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          caption: string | null
          category: string | null
          created_at: string
          id: string
          image_url: string
          is_active: boolean
          sort_order: number
        }
        Insert: {
          caption?: string | null
          category?: string | null
          created_at?: string
          id?: string
          image_url: string
          is_active?: boolean
          sort_order?: number
        }
        Update: {
          caption?: string | null
          category?: string | null
          created_at?: string
          id?: string
          image_url?: string
          is_active?: boolean
          sort_order?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          about_body: string | null
          about_title: string | null
          contact_address: string | null
          contact_email: string | null
          contact_phone: string | null
          facebook_url: string | null
          hero_image_url: string | null
          hero_subtitle: string | null
          hero_title: string | null
          id: number
          instagram_url: string | null
          show_about: boolean
          show_announcements: boolean
          show_booking: boolean
          show_contact: boolean
          show_gallery: boolean
          show_hero: boolean
          show_workshops: boolean
          studio_name: string
          tagline: string | null
          updated_at: string
          upi_id: string | null
          upi_qr_url: string | null
          youtube_url: string | null
        }
        Insert: {
          about_body?: string | null
          about_title?: string | null
          contact_address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          facebook_url?: string | null
          hero_image_url?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          id?: number
          instagram_url?: string | null
          show_about?: boolean
          show_announcements?: boolean
          show_booking?: boolean
          show_contact?: boolean
          show_gallery?: boolean
          show_hero?: boolean
          show_workshops?: boolean
          studio_name?: string
          tagline?: string | null
          updated_at?: string
          upi_id?: string | null
          upi_qr_url?: string | null
          youtube_url?: string | null
        }
        Update: {
          about_body?: string | null
          about_title?: string | null
          contact_address?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          facebook_url?: string | null
          hero_image_url?: string | null
          hero_subtitle?: string | null
          hero_title?: string | null
          id?: number
          instagram_url?: string | null
          show_about?: boolean
          show_announcements?: boolean
          show_booking?: boolean
          show_contact?: boolean
          show_gallery?: boolean
          show_hero?: boolean
          show_workshops?: boolean
          studio_name?: string
          tagline?: string | null
          updated_at?: string
          upi_id?: string | null
          upi_qr_url?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      workshop_registrations: {
        Row: {
          admin_notes: string | null
          created_at: string
          email: string
          id: string
          name: string
          payment_status: Database["public"]["Enums"]["payment_status"]
          phone: string | null
          updated_at: string
          upi_txn_ref: string | null
          user_id: string
          workshop_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          payment_status?: Database["public"]["Enums"]["payment_status"]
          phone?: string | null
          updated_at?: string
          upi_txn_ref?: string | null
          user_id: string
          workshop_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          payment_status?: Database["public"]["Enums"]["payment_status"]
          phone?: string | null
          updated_at?: string
          upi_txn_ref?: string | null
          user_id?: string
          workshop_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workshop_registrations_workshop_id_fkey"
            columns: ["workshop_id"]
            isOneToOne: false
            referencedRelation: "workshops"
            referencedColumns: ["id"]
          },
        ]
      }
      workshops: {
        Row: {
          capacity: number
          cover_url: string | null
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          level: string | null
          location: string | null
          price: number
          starts_at: string
          status: Database["public"]["Enums"]["workshop_status"]
          title: string
          updated_at: string
        }
        Insert: {
          capacity?: number
          cover_url?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          level?: string | null
          location?: string | null
          price?: number
          starts_at: string
          status?: Database["public"]["Enums"]["workshop_status"]
          title: string
          updated_at?: string
        }
        Update: {
          capacity?: number
          cover_url?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          level?: string | null
          location?: string | null
          price?: number
          starts_at?: string
          status?: Database["public"]["Enums"]["workshop_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      booking_status: "pending" | "accepted" | "declined" | "completed"
      payment_status: "pending" | "verified" | "rejected"
      workshop_status: "draft" | "published" | "closed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      booking_status: ["pending", "accepted", "declined", "completed"],
      payment_status: ["pending", "verified", "rejected"],
      workshop_status: ["draft", "published", "closed"],
    },
  },
} as const
