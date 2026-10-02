"use client";

import { useState } from "react";
import { useCMS } from "@/lib/cms-store";
import {
  SectionCard,
  FormField,
  TextInput,
  TextArea,
  ActionBar,
  SaveToast,
} from "@/components/admin/FormElements";
import { Plus, Trash2, ChevronDown, ChevronUp, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function PortfolioEditor() {
  const { portfolio, updateSection, resetSection } = useCMS();
  const [form, setForm] = useState(portfolio);
  const [showToast, setShowToast] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const updateItem = (index: number, key: string, value: string) => {
    const updated = [...form];
    updated[index] = { ...updated[index], [key]: value };
    setForm(updated);
  };

  const addItem = () => {
    const newItem = {
      id: `port-${Date.now()}`,
      title: "",
      category: "Kitchen Set",
      imageUrl: "",
      description: "",
      client: "",
      year: new Date().getFullYear().toString(),
      location: "",
      size: "",
    };
    setForm([...form, newItem]);
    setExpandedIndex(form.length);
  };

  const removeItem = (index: number) => {
    setForm(form.filter((_, i) => i !== index));
    setExpandedIndex(null);
  };

  const handleSave = () => {
    updateSection("portfolio", form);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleReset = () => {
    resetSection("portfolio");
    window.location.reload();
  };

  return (
    <div className="space-y-6 max-w-4xl min-w-0">
      <SectionCard
        title="Proyek Portfolio"
        description={`Total: ${form.length} proyek tersimpan`}
      >
        <div className="space-y-2.5 sm:space-y-3">
          {form.map((item, index) => (
            <div
              key={item.id}
              className="border border-[#E8E1D8] rounded-xl overflow-hidden bg-white shadow-2xs"
            >
              {/* Collapsed header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedIndex(expandedIndex === index ? null : index);
                  }
                }}
                className="w-full flex items-center justify-between px-3 sm:px-4 py-3 bg-[#FAFAF8] hover:bg-[#F5F3F0] transition-colors cursor-pointer gap-2"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {item.imageUrl ? (
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0 border border-[#E8E1D8]">
                      <Image
                        src={item.imageUrl}
                        alt={item.title || "Thumbnail"}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ) : (
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E8E1D8] flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-4 h-4 text-[#3A2F26]/30" />
                    </div>
                  )}
                  <div className="text-left min-w-0">
                    <span className="text-xs sm:text-sm font-sans font-semibold text-[#3A2F26]/75 truncate block max-w-[140px] xs:max-w-[200px] sm:max-w-none">
                      {item.title || "Portfolio Baru"}
                    </span>
                    <span className="text-[10px] font-sans text-[#B08B57] block truncate">
                      {item.category} • {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(index);
                    }}
                    aria-label={`Hapus proyek ${item.title || index + 1}`}
                    className="p-1.5 sm:p-2 text-[#3A2F26]/30 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="p-1 text-[#3A2F26]/30">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="px-3.5 sm:px-5 py-4 sm:py-5 space-y-4 border-t border-[#E8E1D8] bg-white">
                  <FormField label="Judul Proyek">
                    <TextInput
                      value={item.title}
                      onChange={(v) => updateItem(index, "title", v)}
                      placeholder="Contoh: Modern Japandi Living Room"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <FormField label="Kategori">
                      <TextInput
                        value={item.category}
                        onChange={(v) => updateItem(index, "category", v)}
                        placeholder="Kitchen Set / Living Room"
                      />
                    </FormField>
                    <FormField label="Tahun">
                      <TextInput
                        value={item.year}
                        onChange={(v) => updateItem(index, "year", v)}
                        placeholder="2024"
                      />
                    </FormField>
                    <FormField label="Klien">
                      <TextInput
                        value={item.client}
                        onChange={(v) => updateItem(index, "client", v)}
                        placeholder="Private Residence"
                      />
                    </FormField>
                    <FormField label="Lokasi">
                      <TextInput
                        value={item.location}
                        onChange={(v) => updateItem(index, "location", v)}
                        placeholder="Purwokerto"
                      />
                    </FormField>
                    <FormField label="Ukuran / Luas">
                      <TextInput
                        value={item.size}
                        onChange={(v) => updateItem(index, "size", v)}
                        placeholder="120 m²"
                      />
                    </FormField>
                  </div>

                  <FormField label="URL Gambar">
                    <TextInput
                      value={item.imageUrl}
                      onChange={(v) => updateItem(index, "imageUrl", v)}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </FormField>

                  {item.imageUrl && (
                    <div className="relative w-full h-44 sm:h-56 rounded-lg overflow-hidden border border-[#E8E1D8] bg-[#F5F3F0]">
                      <Image
                        src={item.imageUrl}
                        alt={item.title || "Preview"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 768px"
                      />
                    </div>
                  )}

                  <FormField label="Deskripsi Proyek">
                    <TextArea
                      value={item.description}
                      onChange={(v) => updateItem(index, "description", v)}
                      rows={3}
                      placeholder="Deskripsi pengerjaan dan konsep desain..."
                    />
                  </FormField>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="flex items-center gap-2 text-[#B08B57] text-sm font-sans font-medium hover:text-[#C4A26F] transition-colors cursor-pointer mt-3 pt-1"
        >
          <Plus className="w-4 h-4" />
          Tambah Proyek Portfolio
        </button>
      </SectionCard>

      <ActionBar onSave={handleSave} onReset={handleReset} />
      <SaveToast show={showToast} />
    </div>
  );
}
