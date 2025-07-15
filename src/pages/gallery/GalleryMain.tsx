import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { galleryData, type GalleryGroup } from './galleryData';

export const GalleryMain = () => {
  const [open, setOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<GalleryGroup | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleOpen = (groupId: string) => {
    const group = galleryData.find((g) => g.id === groupId) || null;
    setSelectedGroup(group);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedGroup(null);
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handlePrev = () => {
    if (selectedGroup) {
      setActiveIndex((prev) => (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length);
    }
  };

  const handleNext = () => {
    if (selectedGroup) {
      setActiveIndex((prev) => (prev + 1) % selectedGroup.images.length);
    }
  };

  return (
    <section className="gallery-one">
      <div className="container">
        <div className="row masonary-layout">
          {galleryData.map((group) => (
            <div
              key={group.id}
              className="col-xl-3 col-lg-6 col-md-6"
              onClick={() => handleOpen(group.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-one__single">
                <div className="gallery-one__img">
                  <img src={group.cover} alt={group.title} className="img-fluid" />
                  <div className="gallery-one__content">
                    <div className="gallery-one__sub-title-box">
                      <div className="gallery-one__sub-title-shape"></div>
                      <p className="gallery-one__sub-title">{group.subtitle}</p>
                    </div>
                    <h4 className="gallery-one__title">{group.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle 
          // sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#111', // fondo oscuro
            color: '#fff',           // texto claro
          }}
          >
          <Typography variant="h6">{selectedGroup?.title}</Typography>
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: '#111' }}>
          <Grid container spacing={2}>
            {selectedGroup?.images.map((img, idx) => (
              <Grid size={4} key={idx}>
                <img
                  src={img}
                  alt={`img-${idx}`}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageClick(idx)}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      <Dialog
        open={lightboxOpen}
        onClose={handleLightboxClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            boxShadow: 'none',
          },
        }}
        maxWidth="lg"
      >
        <Box sx={{ position: 'relative', p: 10, textAlign: 'center' }}>
          <IconButton
            onClick={handleLightboxClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          {selectedGroup && (
            <img
              src={selectedGroup.images[activeIndex]}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                transition: 'transform 0.3s',
              }}
              // onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              // onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          )}
          {selectedGroup && (
  <Typography
    variant="subtitle2"
    sx={{
      color: 'white',
      position: 'absolute',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      px: 2,
      py: 0.5,
      borderRadius: 2,
    }}
  >
    Imagen {activeIndex + 1} de {selectedGroup.images.length}
  </Typography>
)}
        </Box>
      </Dialog>
    </section>
  );
};
